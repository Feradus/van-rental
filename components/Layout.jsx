import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
	return (
		<div className="md:mx-auto md:w-[50vw] min-h-[100svh] flex flex-col">
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}
