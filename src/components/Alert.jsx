import React from 'react'

export default function Alert({type,title,message}) {
	const typeOfMessage = {
		error : {
			color: "#fcc9cb",
			icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
		},
		warning : {
			color: "#fde68a",
			icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
		},	
		info : {
			color: "#bfdbfe",
			icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
		},
		success : {
			color: "#b5f4d1",
			icon: "M5 13l4 4L19 7"
		}
	}

	return (
		<div className="container mx-auto my-2 text-center">
			<div className="w-full max-w-lg mx-auto mt-6 p-2 rounded-lg" style={{backgroundColor: typeOfMessage[type].color}}>
				<div className="flex space-x-2">
					<svg className="w-6 h-6 stroke-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={typeOfMessage[type].icon}></path></svg>
					<p className="text-stone-900 font-bold">{title}</p>
				</div>
				{typeof(message) === "string" ? <p className="ml-8 text-stone-800">{message}</p> 
				:<ul>
					{ message.map((error,index) => <li key={index} > {error.message}</li>)}
				</ul>}
			</div>
		</div>
	)
}