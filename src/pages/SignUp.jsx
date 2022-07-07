import React, {useState,useEffect} from "react";
import {Link as LinkRouter} from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import {useSelector, useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";
import Alert from "../components/Alert";
import GoogleSignUp from "../components/GoogleSignUp";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import FacebookSignUp from "../components/FacebookSignUp";



export default function SignUp() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [passwordVisible, setPasswordVisible] = useState("password");
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState("password");
	const [passwordValue, setPasswordValue] = useState("");
	const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
	const [match, setMatch] = useState(true);
	const [errorValidator,setErrorValidator] = useState([]);
	const [showErrorValidator, setShowErrorValidator] = useState(false); 
	const [countrySelected, setCountrySelected] = useState("");



	const countries = useSelector(store => store.countryReducer.countries)
	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])
	useEffect(()=>{
		passwordValue === confirmPasswordValue ? setMatch(true)	: setMatch(false)
	},[passwordValue,confirmPasswordValue])
	const handleSubmit = (event) =>{
		event.preventDefault()
		if(countrySelected === ""){
			toast.error("you must select a country first");
		}else if(match){
			const userData = {
				username: event.target["username"].value.trim(),
				first_name: event.target["first_name"].value.trim(),
				last_name: event.target["last_name"].value.trim(),
				email: event.target["email"].value.trim(),
				password: event.target["password"].value.trim(),
				country: countrySelected,
				photo: event.target["photo"].value.trim(),
				from: "form-signUp"
		}
		dispatch(userActions.signUpUser(userData))
		.then(result => {
			if(result === undefined || result === null) {
				setShowErrorValidator(false)
				navigate('/login')
			}else{
				setErrorValidator(result)
				setShowErrorValidator(true)
			}
		})
		}
	}
	return (
		<div className="flex items-center justify-center"  >
			<form className="p-4 my-4 md:mx-12 md:my-20  bg-slate-50 text-left rounded-lg max-w-3xl" onSubmit={handleSubmit}>
				{countrySelected !== "" 
				? <>
						<div className="relative z-0 w-full mb-6 group">
							<input type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
					</div>
					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 w-full mb-6 group">
								<input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
								<label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
								<input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
								<label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
						</div>
					</div>
					<div className="relative z-0 w-full mb-6 group">
							<input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
					</div>
					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 w-full mb-6 group">
						<div className="relative">
								<input type={passwordVisible} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setPasswordValue(e.target.value)} />
								<label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
								{passwordVisible === "password"
								? <EyeOffIcon className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setPasswordVisible("text")}/> 
								: <EyeIcon  className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setPasswordVisible("password")}/>}
					</div>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<div className="relative">
								<input type={confirmPasswordVisible} name="confirm_password" id="confirm_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setConfirmPasswordValue(e.target.value)} style={{borderColor: match ? "#d1d5db" : "#fca5a5"}}/>
									<label htmlFor="confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
									{confirmPasswordVisible === "password"
									? <EyeOffIcon className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setConfirmPasswordVisible("text")}/> 
									: <EyeIcon  className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setConfirmPasswordVisible("password")}/>}
							</div>
							{match ? "" : <p className="text-red-300">Passwords don't match</p>}
						</div>
					</div>
					<div className="relative z-0 w-full mb-6 group">
							<input type="text" name="photo" id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="photo" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Url</label>
					</div>
					<button type="submit" className="mt-3 text-lg font-semibold bg-gray-800 mx-auto text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
						sign Up
					</button>
					{showErrorValidator ? <Alert type="error" title="form errors" message={errorValidator} /> : ""}
					<div className='flex items-center justify-center flex-wrap'>
						<div className="w-full flex items-center justify-center mb-2 flex-wrap">
							<p>do you already have an account created?</p>
							<LinkRouter to="/login" className="ml-2 text-lg font-semibold text-teal-500 hover:text-teal-700 hover:border-b-2 hover:border-teal-700 ">
							Log In
						</LinkRouter>
						</div>
						<FacebookSignUp country={countrySelected}/>
						<GoogleSignUp country={countrySelected}/>
					</div>	
				</>
					:<div className="relative z-0 w-full mb-6 group">
					<label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-500">Select your country</label>
					<select id="country" name="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setCountrySelected(e.target.value)}>
						<option value="">unselected</option>
						{countries.map((country) => <option value={country} key={country}>{country}</option>)}
					</select>
				</div>}
			</form>
			
		</div>

	)
}
