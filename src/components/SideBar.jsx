import React from 'react'
import { XCircleIcon } from '@heroicons/react/solid'

export default function SideBar({handleClose,handleScroll,city,itinerary}) {
	let itineraries = []
	for(let i = 0; i <itinerary.length; i++){
		itineraries.push(<button key={itinerary[i]._id} onClick={ () => handleScroll(itinerary[i]._id)} className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 w-full'>
			<img src={itinerary[i].userPicture} alt="card" className=" min-w-12 min-h-12 max-w-14 max-h-14   mr-1 object-cover overflow-hidden rounded-full border-2"/>
			<span className='truncate'>{itinerary[i].name}</span>
			</button>)
	}
	
	return (
		<div className='min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none'>
			<div className="h-screen w-full sm:w-1/4 bg-gray-900 overflow-auto">
				<div className="sticky top-0 bg-gray-900">
					<button onClick={() => handleClose(false)}>
						<XCircleIcon className='text-indigo-400 w-14 h-14'/>
					</button>
					<p className='text-white text-lg md:text-2xl font-bold my-2'>Available Itineraries for {city}</p>
				</div>
				<div>
					{itineraries}
				</div>
			</div>
			<div className="h-screen w-0 sm:w-3/4 bg-black opacity-50 hover:overflow-hidden" onClick={() => handleClose(false)}></div>

		</div>
	)
}
