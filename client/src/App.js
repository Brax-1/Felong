import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login } from './components';

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
