import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import clsx from "clsx"

export default function HostVanDetail() {
	const [van, setVan] = React.useState(null)

	const { id } = useParams()

	React.useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans))
	}, [])

	if (!van) {
		return <h1>Loading...</h1>
	}

	const vanTypeClassName = clsx(
		"inline-block mb-5 h-7 w-21 text-center leading-7 font-semibold text-[#FFEAD0] rounded-md",
		{
			"bg-[#E17654]": van?.type === "simple",
			"bg-[#115E59]": van?.type === "rugged",
			"bg-[#161616]": van?.type === "luxury",
		}
	)

	return (
		<section>
			<Link to=".." relative="path" className="ml-5">
				&larr; <span>Back to all vans</span>
			</Link>

			<div className="ml-10 mt-10">
				<div className="flex items-center gap-5">
					<img src={van.imageUrl} className="size-39 rounded-md" />
					<div className="space-y-1">
						<h3 className={vanTypeClassName}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</h3>
						<h3 className="text-xl font-bold text-[#161616]">{van.name}</h3>
						<span className="text-xl font-semibold">${van.price}</span>/day
					</div>
				</div>

				<nav className="my-10">
					<NavLink
						to="."
						end
						className={({ isActive }) =>
							`py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
							${isActive ? "font-bold text-[#161616] underline" : ""}`
						}
					>
						Details
					</NavLink>
					<NavLink
						to="pricing"
						className={({ isActive }) =>
							`px-5 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
							${isActive ? "font-bold text-[#161616] underline" : ""}`
						}
					>
						Pricing
					</NavLink>
					<NavLink
						to="photos"
						className={({ isActive }) =>
							`py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
							${isActive ? "font-bold text-[#161616] underline" : ""}`
						}
					>
						Photos
					</NavLink>
				</nav>

				<Outlet context={{ van }} />
			</div>
		</section>
	)
}
