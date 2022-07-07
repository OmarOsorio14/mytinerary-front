import React, {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";

export default function GoogleLogIn() {
	const dispatch = useDispatch()

	async function handleCallbackResponse(response){

			let userObject = jwt_decode(response.credential)
			dispatch(userActions.logInUser({
				email: userObject.email,
				password: userObject.sub,
				from: "Google"
			}))
		
	}
	useEffect(()=>{
		/* global google */
		try {
			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_CLIENT_ID,
				callback: handleCallbackResponse
			})
	
			google.accounts.id.renderButton(
				document.getElementById('googleButton'),{theme: "outline", size: "medium", locale: "en"}
			)
		} catch (error) {
			console.error(error)
		}
	})
	return (
		<div id="googleButton"></div>
	)
}
