import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { app } from "../config/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getApps } from "firebase/app";

const Login = (props) => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const navigate = useNavigate();

	const loginWithGoogle = async () => {
		await signInWithPopup(firebaseAuth, provider).then((res) => {
			if (res) {
				props.setAuth(true);
				window.localStorage.setItem("felongAuth", "true");
				firebaseAuth.onAuthStateChanged((userCred) => {
					if (userCred) {
						userCred.getIdToken().then((token) => {
							console.log(token);
						});
						// navigate("/", { replace: true });
					} else {
						props.setAuth(false);
						window.localStorage.setItem("auth", "false");
						navigate("/login");
					}
				});
			}
		});
	};
	useEffect(() => {
		if (window.localStorage.getItem("felongAuth") === "true") {
			navigate("/", { replace: true });
		}
	}, []);

	return (
		<div className="relative w-screen h-screen">
			<div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
				<div className="w-full h-fit md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
					<div
						className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-white hover:shadow-md duration-50 ease-in-out transition-all"
						onClick={loginWithGoogle}
					>
						<FcGoogle className="text-xl" />
						Sign in with google
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
