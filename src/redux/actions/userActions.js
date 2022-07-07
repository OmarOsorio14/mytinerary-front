import axios from "axios";
import toast from 'react-hot-toast';
import {url} from '../../url'

const userActions = {
		signUpUser: (userData)=>{
			return async(dispatch, getState) => {
				const res = await axios.post(`${url}api/auth/signup`, {userData})
				
				if(res.data.success){
					toast.success(res.data.message);
				}else{
					if(typeof(res.data.message)==="string"){
						toast.error(res.data.message);
					}else{
						toast.error("there are some errors in the form, please check the list that appeared under the sign up button");
						return res.data.message
					}
				return null
			}
		}
		},
		logInUser: (logedUser)=>{
			return async(dispatch, getState) => {
				const res = await axios.post(`${url}api/auth/login`, {logedUser})

				if(res.data.success){
					localStorage.setItem('token', res.data.response.token)
					dispatch({ type: 'logInUser', payload: res.data.response.userData });
					toast.success(res.data.message)
				}else{
					toast.error(res.data.message)
				}
			}
		},
		signOutUser: ()=>{
			return (dispatch,getState) =>{
				localStorage.removeItem('token');
				dispatch({ type: 'logOutUser', payload: null });
				toast.success('Sign Out success')
			}
		},
		verifyToken: (token) => {
			return async (dispatch, getState) => {
					const user = await axios.get(`${url}api/auth/loginToken`, {headers: {'Authorization': 'Bearer '+token}} )
					if (user.data.success) {
						dispatch({ type: 'logInUser', payload: user.data.response });
						toast.success(user.data.message)
					} else {
							localStorage.removeItem('token')
					}
			}
	}
}
export default userActions