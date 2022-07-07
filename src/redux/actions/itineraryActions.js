import axios from "axios";
import toast from 'react-hot-toast';
import {url} from '../../url'

const itineraryActions = {
		getItineraries: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get(`${url}api/itineraries`)
				dispatch({type:'getItineraries', payload:res.data.response.itineraries})
			}
		},
		giveLikeOrDislike: (id)=>{
			return async(dispatch, getState) => {
				if(id==="not logged"){
					toast.error("for this action you must be logged in first")
				}else{
					const token = localStorage.getItem('token')
					const res = await axios.put(`${url}api/itineraries/like/${id}`, {}, {
						headers: {
								'Authorization': `Bearer ${token}`
									}
						})
				}	
			}
		},
		AddComment: (data)=>{
			return async(dispatch, getState) => {
				if(data==="not logged"){
					toast.error("for this action you must be logged in first")
				}else{
					const token = localStorage.getItem('token')
					const res = await axios.post(`${url}api/itineraries/comment`, {data}, {
						headers: {
								'Authorization': `Bearer ${token}`
									}
						})
					if(res.data.success){
						toast.success("thanks for comment")
					}else{
						toast.error("something went wrong try again later")
					}
				}	
			}
		},
		
		UpdateComment: (data)=>{
			return async(dispatch, getState) => {
				if(data==="not logged"){
					toast.error("for this action you must be logged in first")
				}else{
				const token = localStorage.getItem('token')
				const res = await axios.put(`${url}api/itineraries/comment`, {data}, {
					headers: {
							'Authorization': `Bearer ${token}`
								}
					})
				if(res.data.success){
					toast.success(res.data.message)
				}else{
					toast.error(res.data.message)
				}
				}	
			}
		},
		DeleteComment: (id)=>{
			return async(dispatch, getState) => {
				const token = localStorage.getItem('token')
				const res = await axios.put(`${url}api/itineraries/comment/${id}`, {}, {
					headers: {
							'Authorization': `Bearer ${token}`
								}
					})
					if(res.data.success){
						toast.success("comment deleted successfully")
					}else{
						toast.error("something went wrong try again later")
					}
				}	
			}
		}

export default itineraryActions