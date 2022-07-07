import axios from "axios";
import {url} from '../../url'

const cityActions = {
		getCities: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get(`${url}api/cities`)
				dispatch({type:'getCities', payload:res.data.response.cities})
			}
		},
		filterCities: (cities,value)=>{
			return (dispatch, getState) => {
				dispatch({type:'filter', payload:{cities,value}})
			}
		},
		getOneCity: (id)=>{
			return async(dispatch, getState) => {
				try {
					const res = await axios.get(`${url}api/cities/${id}`)
					dispatch({type:'oneCity', payload:res.data.response})
			}catch (err) {
					console.error(err)
			}
			}
		}
}
export default cityActions