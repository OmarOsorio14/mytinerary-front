import React from "react";
import ContinentTag from "./ContinentTag";
import {Link as LinkRouter} from "react-router-dom";
import ItineraryPreview from "./ItineraryPreview";


export default function Card({id,name, country,image,continent,description,itineraries}) {
  return (
				<div className="text-indigo-200 body-font p-2 bg-gray-900 md:mx-6 mx-0 my-6">
					<div className="mx-auto flex px-5  md:flex-row flex-col-reverse items-center">
						<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
							<figure className="visible">
									<div className="pt-10 px-2 sm:px-6">
										<ContinentTag continent={continent}/>
										<p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{name}</p>
										<p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{country}</p>
										<p className="text-indigo-200 text-base pb-6 text-left">{description}</p>
										{Object.keys(itineraries).length ===0
										? <p className="text-indigo-200 text-base pb-6 text-left">we don't have itineraries in this city yet</p> 
										: <ItineraryPreview itineraries={itineraries} />
										}
										
										<div className="flex items-center justify-center mt-2">
											<LinkRouter to={"/detail/"+id} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
												<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
													See detail of city
												</span>
											</LinkRouter>
										</div>
									</div>
							</figure>
						</div>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block">
							<img className="object-cover object-center rounded" alt={name} src={image} />
						</div>
					</div>
      </div>
  );
}