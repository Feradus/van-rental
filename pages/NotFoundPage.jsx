import { Link } from "react-router-dom"

export default function NotFoundPage() {
	return (
		<section className="mt-20 h-50 mx-5 space-y-10">
			<h1 className="font-bold text-3xl">Sorry, the page you were looking for was not found.</h1>
			<Link to="/" className="bg-black text-white block rounded-md width-[100vw] h-13 text-center leading-13">
				Return to home
			</Link>
		</section>
	)
}
