import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
	return (
		<>
			<nav className="mb-10">
				<NavLink
					className={({ isActive }) =>
						`px-5 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="."
					end
				>
					Dashboard
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`px-5 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="income"
				>
					Income
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`px-5 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="vans"
				>
					Vans
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`px-5 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="reviews"
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}
