import React, {useState,useEffect} from "react";
import {Link as LinkRouter} from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";
import GoogleLogIn from "../components/GoogleLogIn";
import FaceLogIn from "../components/FaceLogIn";

export default function LogIn() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])

	const dispatch = useDispatch()
	const handleSubmit = (event) =>{
		event.preventDefault()
			const logedUser = {
				email: event.target["email"].value,
				password: event.target["password"].value,
				from: "form-signUp"
		}
		dispatch(userActions.logInUser(logedUser))
	
		}
	

	const [passwordVisible, setPasswordVisible] = useState("password");
	return (
		<div className="flex items-center justify-center">
				<form className="p-4 my-4 md:mx-12 md:my-20 bg-slate-50 text-left rounded-lg max-w-3xl" onSubmit={handleSubmit}>
			<div className="relative z-0 w-full mb-6 group">
					<input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
			</div>
			<div className="relative z-0 w-full mb-6 group">
					<input type={passwordVisible} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
					{passwordVisible === "password"
					? <EyeOffIcon className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setPasswordVisible("text")}/> 
					: <EyeIcon  className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setPasswordVisible("password")}/>}
					
			</div>
			<button type="submit" className="mt-3 text-lg font-semibold bg-gray-800 mx-auto text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
        Log In
      </button>
			<div className='flex items-center justify-center flex-wrap'>
				<div className="w-full flex items-center justify-center mb-2 flex-wrap">
					<p>Don't have an account?</p>
					<LinkRouter to="/signup" className="ml-2 text-lg font-semibold text-teal-500 hover:text-teal-700 hover:border-b-2 hover:border-teal-700">
					Sign up
				</LinkRouter>
				</div>
				<FaceLogIn />
				<GoogleLogIn />
			</div>	
		</form>
		</div>
	)
}
