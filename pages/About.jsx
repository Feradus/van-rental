import React from "react"
import { Link } from "react-router-dom"
import heroImg from "../assets/images/about-hero.png"

export default function About() {
	return (
		<div className="space-y-6">
			<img src={heroImg} />
			<div className="mx-6 space-y-6">
				<h1 className="text-3xl font-bold">Don't squeeze in a sedan when you could relax in a van.</h1>
				<p className="font-medium text-[#161616]">
					Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before
					each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
				</p>
				<p className="font-medium text-[#161616]">
					Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
				</p>
			</div>
			<div className="mx-6 space-y-6 rounded-md bg-[#FFCC8D] p-10">
				<h2 className="text-2xl font-bold text-[#161616]">
					Your destination is waiting.
					<br />
					Your van is ready.
				</h2>
				<Link
					className="inline-block h-15 w-45 rounded-xl bg-[#161616] text-center leading-15 font-bold text-white hover:translate-0.5"
					to="/vans"
				>
					Explore our vans
				</Link>
			</div>
		</div>
	)
}
