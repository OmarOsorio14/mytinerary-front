import React from 'react'

export default function ContinentTag({continent}) {
	let colors = {
		America: "#16a14c",
		Asia: "#c68a09",
		Africa: "#e9580c",
		Oceania: "#0d9489",
		Europe: "#4e49e6"
	}
	return (
		<span className={`inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2`} style={{backgroundColor: colors[continent]}}>{continent}</span>
	)
}
