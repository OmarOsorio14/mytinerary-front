import React, {useEffect,useState} from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import Alert from "../components/Alert";
import cityActions from "../redux/actions/cityActions";
import {useDispatch,useSelector} from 'react-redux'

function Cities() {
	const dispatch = useDispatch()
	const cities = useSelector(store => store.cityReducer.cities)
	const filter = useSelector(store => store.cityReducer.filter)
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		window.scrollTo(0, 0)
		if(cities.length !== 0 ){
			setLoading(false)
		}else{
			setLoading(true)
		}
	},[cities.length])
	
	const handleSearch = (event)=>{
		dispatch(cityActions.filterCities(cities,event))
	}
		return (
			<>
				<Search handleSearch={handleSearch}/>
				{filter.length !== 0 
				? (filter.map((card)=> <Card key={card._id} id={card._id} name={card.name} country={card.country} image={card.image} continent={card.continent}  description={card.description} itineraries={card.itineraries}/>))
				: loading ? "" : <Alert type="warning" title="this city was not found" message="At the moment we do not have this destination within our offer" />}
				
			</>
		);
	}
export default Cities;