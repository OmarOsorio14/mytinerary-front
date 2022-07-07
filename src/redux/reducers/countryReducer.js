const initialState = {
	countries:[]
}

const countryReducer = (state = initialState, action)=>{
	switch(action.type) {
		case 'getCountries':
			return {
				...state,
				countries: action.payload
			}
		default:
			return state
	}
}
export default countryReducer;