import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	const loginWithGoogle = async () => {
        
    };
	return (
		<div className="relative w-screen h-screen">
			<div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
				<div className="w-full h-fit md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
					<div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-white hover:shadow-md duration-50 ease-in-out transition-all">
						<FcGoogle className="text-xl" />
						Sign in with google
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
