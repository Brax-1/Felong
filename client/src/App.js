import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Home, Login } from './components';
import { app } from './config/firebase.config';

function App() {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const [auth,setAuth] = useState(false || window.localStorage.getItem("felongAuth")==="true")
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred)=>{
      console.log(userCred)
      if(userCred){
        userCred.getIdToken().then((token)=>{
          console.log(token);
        })
      }
      else{
        setAuth(false);
        window.localStorage.setItem("auth","false");
        navigate("/login");
      }
    })
  }, [])
  
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
