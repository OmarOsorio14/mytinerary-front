import React from 'react'

export default function ItineraryPreview(itineraries) {
	let firstItineraryUser = ""
	let photos = []
	for (let i = 0; i < 3 && i < Object.keys(itineraries.itineraries).length; i++) {
		photos.push(<img key={itineraries.itineraries[i]._id} src={itineraries.itineraries[i].userPicture} alt={itineraries.itineraries[i].userName} className={`h-12 w-12 object-cover overflow-hidden rounded-full border-2 z-${30-(i*10)}`}
		style={{zIndex:3-i,transform: `translateX(-${i}rem)`}} />)
		if(i===0){
			firstItineraryUser = itineraries.itineraries[i].userName
		}
	}

	//Object.keys(itineraries.itineraries).forEach( e => ))
	return (
		<div className="flex flex-wrap items-center">
											<div className="flex">{photos}</div>
											{Object.keys(itineraries.itineraries).length === 1
											? <p className="ml-2 text-indigo-200 font-bold text-left">we have an intinerary for {firstItineraryUser}</p>
											: <p className="ml-2 text-indigo-200 font-bold text-left">we have intineraries for {firstItineraryUser} and {Object.keys(itineraries.itineraries).length-1} more</p>
											}
											
										</div>
	)
}
