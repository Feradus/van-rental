import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/vans/Vans"
import VanDetail from "./pages/vans/VanDetail"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans from "./pages/host/HostVans"
import HostVanDetail from "./pages/host/HostVanDetail"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import HostVanInfo from "./pages/host/HostVanInfo"
import HostVanPricing from "./pages/host/HostVanPricing"
import HostVanPhotos from "./pages/host/HostVanPhotos"
import NotFoundPage from "./pages/NotFoundPage"
import Login from "./pages/Login"
import Error from "./components/Error"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="login" element={<Login />} />
			<Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
			<Route path="/vans/:id" element={<VanDetail />} />
			<Route path="host" element={<HostLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="income" element={<Income />} />
				<Route path="reviews" element={<Reviews />} />
				<Route path="vans" element={<HostVans />} />
				<Route path="vans/:id" element={<HostVanDetail />}>
					<Route index element={<HostVanInfo />} />
					<Route path="pricing" element={<HostVanPricing />} />
					<Route path="photos" element={<HostVanPhotos />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
