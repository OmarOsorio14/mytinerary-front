const initialState = {
	itineraries:[],
	itinerariesByCity:[],
}

const itineraryReducer = (state = initialState, action)=>{
	switch(action.type) {
		case 'getItineraries':
			return {
				...state,
				itineraries: action.payload
			}
		default:
			return state
	}
}
export default itineraryReducer;