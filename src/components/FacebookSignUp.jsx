import React from 'react'
import FacebookLogin from 'react-facebook-login';
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";
import {useNavigate} from 'react-router-dom'
import '../styles/facebook.css';


export default function FacebookSignUp({country}) {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const responseFacebook = (res) => {
		const arrayName = res.name.split(" ")
				dispatch(userActions.signUpUser({
					username: res.name,
					first_name: arrayName[0],
					last_name: arrayName[arrayName.length-1],
					email: res.email,
					password: res.id,
					country: country,
					photo: res.picture.data.url,
					from: "Facebook"
				}))
				navigate('/login')
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
