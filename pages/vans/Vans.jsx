import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import "../../server"
import clsx from "clsx"

export default function Vans() {
	const [vans, setVans] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get("type")

	useEffect(() => {
		fetch("/api/vans")
			.then((req) => req.json())
			.then((data) => setVans(data.vans))
	}, [])

	const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans

	const vanElements = displayedVans.map((van) => {
		const vanTypeClassName = clsx(
			"inline-block mb-5 h-7 w-21 text-center leading-7 font-semibold text-[#FFEAD0] rounded-md",
			{
				"bg-[#E17654]": van?.type === "simple",
				"bg-[#115E59]": van?.type === "rugged",
				"bg-[#161616]": van?.type === "luxury",
			}
		)

		return (
			<div key={van.id} className="space-y-2">
				<Link
					to={van.id}
					state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
					aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
				>
					<img className="rounded-md" src={van.imageUrl} />
					<div className="flex justify-between">
						<span className="text-xl font-semibold">{van.name}</span>
						<div>
							<span className="text-xl font-semibold">{van.price}</span> <br />
							<span className="text-sm leading-0">/day</span>
						</div>
					</div>
					<span className={vanTypeClassName}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</span>
				</Link>
			</div>
		)
	})

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key)
			} else {
				prevParams.set(key, value)
			}
			return prevParams
		})
	}

	return (
		<div className="px-5">
			<h1 className="mb-10 text-3xl font-bold">Explore our van options</h1>

			<div className="space-x-5 mb-10">
				<button
					className={`cursor-pointer px-3 py-2 rounded-md ${typeFilter === "simple" ? "bg-[#FFEAD0]" : ""}`}
					onClick={() => handleFilterChange("type", "simple")}
				>
					Simple
				</button>
				<button
					className={`cursor-pointer px-3 py-2 rounded-md ${typeFilter === "luxury" ? "bg-[#FFEAD0]" : ""}`}
					onClick={() => handleFilterChange("type", "luxury")}
				>
					Luxury
				</button>
				<button
					className={`cursor-pointer px-3 py-2 rounded-md ${typeFilter === "rugged" ? "bg-[#FFEAD0]" : ""}`}
					onClick={() => handleFilterChange("type", "rugged")}
				>
					Rugged
				</button>
				{typeFilter ? <button onClick={() => handleFilterChange("type", null)}>Clear</button> : null}
			</div>

			<div className="grid grid-cols-2 gap-5 xl:grid-cols-3">{vanElements}</div>
		</div>
	)
}
