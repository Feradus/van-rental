import { Link, NavLink } from "react-router-dom"

export default function Header() {
	return (
		<header className="flex h-28 items-center justify-between">
			<Link className="pl-5 py-1.5 text-2xl font-black uppercase hover:underline" to="/">
				#VanLife
			</Link>
			<nav className="flex items-center">
				<NavLink
					className={({ isActive }) =>
						`px-3 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="/host"
				>
					Host
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`px-3 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="/about"
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`px-3 py-1.5 font-semibold text-[#4D4D4D] hover:text-[#161616] hover:underline
						${isActive ? "font-bold text-[#161616] underline" : ""}`
					}
					to="/vans"
				>
					Vans
				</NavLink>
				<Link to="login" className="pr-5 py-1.5 hover:underline">
					<img src="../assets/images/avatar-icon.png" className="size-3" />
				</Link>
			</nav>
		</header>
	)
}
