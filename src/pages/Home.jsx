import React, {useEffect} from "react";
import Carousel from '../components/Carousel';
import Hero from "../components/Hero";
import {useSelector} from 'react-redux'

function Home() {
	
	useEffect(()=>{
		window.scrollTo(0, 0)
	})
	const cities = useSelector(store => store.cityReducer.cities)
  return (
		<>
		<div className="h-screen bg-cover bg-[url('../assets/home_background.jpg')] flex flex-col justify-center items-center">
			<Hero />
    </div>
		<Carousel title="Popular MyTineraries" data={cities} load={2} redirection={true}/>
		</>
  );
}

export default Home;