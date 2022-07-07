const initialState = {
	cities:[],
	filter:[],
	oneCity:{}
}

const cityReducer = (state = initialState, action)=>{
	switch(action.type) {
		case 'getCities':
			return {
				...state,
				cities: action.payload,
				filter: action.payload
			}
			case 'filter':
				const filtered = action.payload.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim()))
				return {
					...state,
					filter: filtered
				}
			case 'oneCity' :
				return{
					...state,
					oneCity: action.payload
				}
		default:
			return state
	}
}
export default cityReducer;