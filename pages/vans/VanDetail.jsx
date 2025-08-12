import { useState, useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import "../../server"
import clsx from "clsx"

export default function VanDetail() {
	const [van, setVan] = useState(null)

	const params = useParams()
	const location = useLocation()

	const search = location.state?.search || ""
	const type = location.state?.type || "all"

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then((req) => req.json())
			.then((data) => setVan(data.vans))
	}, [params.id])

	const vanTypeClassName = clsx(
		"inline-block mb-5 h-7 w-21 text-center leading-7 font-semibold text-[#FFEAD0] rounded-md",
		{
			"bg-[#E17654]": van?.type === "simple",
			"bg-[#115E59]": van?.type === "rugged",
			"bg-[#161616]": van?.type === "luxury",
		}
	)

	return (
		<div className="mx-5 mt-10 overflow-auto">
			<Link to={`../${search}`} relative="path" className="ml-5">
				&larr; {<span>Back to {type} vans</span>}
			</Link>
			{van ? (
				<div className="space-y-4 mt-5">
					<img className="w-[100%] rounded-md" src={van.imageUrl} />
					<span className={vanTypeClassName}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</span>
					<h2 className="text-3xl font-bold">{van.name}</h2>
					<p className="van-price">
						<span className="text-2xl font-bold">${van.price}</span>
						<span className="text-xl">/day</span>
					</p>
					<p>{van.description}</p>
					<button
						className="h-12 w-[100%] rounded-md bg-[#FF8C38] text-center leading-12 font-bold text-white
							hover:translate-0.5"
					>
						Rent this van
					</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	)
}
