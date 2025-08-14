import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="bg-[url(../assets/images/home-hero.png)] flex h-95 flex-col justify-evenly bg-cover bg-no-repeat
			px-10">
			<h1 className="text-4xl font-extrabold text-white">You got the travel plans, we got the travel vans.</h1>
			<p className="leading-6 font-medium text-white">
				Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
				trip.
			</p>
			<Link
				className="block h-12 rounded-md bg-[#FF8C38] text-center leading-12 font-bold text-white hover:translate-0.5"
				to="vans"
			>
				Find your van
			</Link>
		</div>
	)
}
