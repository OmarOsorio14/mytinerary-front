const initialState = {
	user: null
}

const userReducer = (state = initialState, action)=>{
	switch(action.type) {
		case 'logInUser':
			return {
				...state,
				user: action.payload
			}
			case 'logOutUser':
			return {
				...state,
				user: null
			}
		default:
			return state
	}
}
export default userReducer;