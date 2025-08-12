import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../../server"

export default function HostVans() {
	const [vans, setVans] = useState([])

	useEffect(() => {
		fetch("/api/host/vans")
			.then((req) => req.json())
			.then((data) => setVans(data.vans))
	}, [])

	const vanElements = vans.map((van) => {
		return (
			<Link to={van.id} key={van.id}>
				<div className="flex items-center gap-5 pl-10 pb-10">
					<img src={van.imageUrl} className="size-16 rounded-md" />
					<div>
						<span className="font-semibold text-xl">{van.name}</span> <br />
						<span className="text-[#4D4D4D]">{`$${van.price}/day`}</span>
					</div>
				</div>
			</Link>
		)
	})

	return (
		<section>
			<h1 className="ml-5 my-10 text-[##161616] font-bold text-3xl">Your listed vans</h1>
			{vanElements.length > 0 ? <div>{vanElements}</div> : <h2>Loading...</h2>}
		</section>
	)
}
