import React from 'react'
import FacebookLogin from 'react-facebook-login';
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";
import '../styles/facebook.css';


export default function FaceLogIn() {

	const dispatch = useDispatch()

	const responseFacebook = (res) => {
				dispatch(userActions.logInUser({
					email: res.email,
					password: res.id,
					from: "Facebook"
				}))
	}

	return (
		<FacebookLogin
   		appId="5253938221310216"
    	autoLoad={false}
			cssClass="facebook-button"
    	fields="name,email,picture"
			icon="fa-facebook"
			textButton=" Sign in with Facebook"
    	callback={responseFacebook} />
	)
}