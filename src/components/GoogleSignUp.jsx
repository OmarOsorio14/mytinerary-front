import React, {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";
import {useNavigate} from 'react-router-dom'

export default function GoogleSignUp({country}) {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	async function handleCallbackResponse(response){
		let userObject = jwt_decode(response.credential)

		dispatch(userActions.signUpUser({
			username: userObject.name,
			first_name: userObject.given_name,
			last_name: userObject.family_name,
			email: userObject.email,
			password: userObject.sub,
			country: country,
			photo: userObject.picture,
			from: "Google"
		}))
		navigate('/login')
	}
	useEffect(()=>{
		/* global google */

			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_CLIENT_ID,
				callback: handleCallbackResponse
			})
	
			google.accounts.id.renderButton(
				document.getElementById('googleButton'),{theme: "outline", size: "medium", locale: "en"}
			)
		
	})

	return (
		<div id="googleButton"></div>
	)
}
