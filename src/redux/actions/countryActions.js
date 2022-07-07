import axios from "axios";

const countryActions = {
		getCountries: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get('https://restcountries.com/v3.1/all')
				let countries = res.data.map(country => country.name.common)
				dispatch({type:'getCountries', payload:countries.sort()})
			}
		},
}
export default countryActions