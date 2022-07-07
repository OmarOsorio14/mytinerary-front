import React, {useEffect,useState} from 'react'
import SideBar from '../components/SideBar'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useParams } from 'react-router-dom'
import cityActions from '../redux/actions/cityActions';
import {useDispatch,useSelector} from 'react-redux'
import Itinerary from '../components/Itinerary';
import Alert from '../components/Alert';



function Detail() {
	const {id} = useParams()
	const dispatch = useDispatch()

	const [cityLoad, setCityLoad] = useState(false);
	const [showSideBar, setShowSideBar] = useState(false);
	const [refs, setRefs] = useState([]);



	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])

	const city = useSelector(store => store.cityReducer.oneCity)
	const makeRefs = () => {
		setRefs(city.itineraries.reduce((acc, value) => {
			acc[value._id] = React.createRef();
			return acc;
		}, {}));
	}

	useEffect(()=>{
		dispatch(cityActions.getOneCity(id));
		if(city.itineraries !== undefined){
			setCityLoad(true)
			makeRefs()		
		}else{
			setCityLoad(false)
		}
	},[city.itineraries])
	const handleClose = (event)=>{
		setShowSideBar(event)
	}
	const handleScroll = (id)=>{
		refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
		handleClose(false)
	}
	return (
			<>
				<img className="w-full max-h-52 object-cover overflow-hidden h-52 shadow-lg shadow-lime-500/50" src={city.image} alt="" />
				<div className="mx-0 md:mx-16 my-4 p-2">
					<p className=' text-5xl mb-2 text-left font-bold'>{city.name}</p>
					<p className=' text-3xl mb-2 text-left font-bold'>Description</p>
					<p className=' text-left'>{city.description}</p>
					{cityLoad ? Object.keys(city.itineraries).length ===0 ? <Alert type="info" title="this city doesn't have itineraries yet" message="At the moment we do not have any itinerary available for this city, maybe the next time that you comeback there is one waiting for you"/>
					: Object.keys(city.itineraries).map((itinerary) => {
						return <div className='pt-14' ref={refs[city.itineraries[itinerary]._id]} key={city.itineraries[itinerary]._id}><Itinerary id={city.itineraries[itinerary]._id} itinerary={city.itineraries[itinerary]}/></div> 
						
					}): ""}
				</div>
				{cityLoad && Object.keys(city.itineraries).length !==0 ? <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 max-w-max max-h-max fixed inset-y-1/2 rounded animate-pulse" onClick={()=>{handleClose(!showSideBar)}}>
  				<ArrowRightIcon className='md:h-8 md:w-8 h-4 w-4' />
				</button> : "" }
				{showSideBar ? 	<SideBar handleClose={handleClose} handleScroll={handleScroll} city={city.name} itinerary={city.itineraries}/> : ""}
			</>
	)
}
export default Detail;