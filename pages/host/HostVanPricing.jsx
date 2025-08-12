import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
	const { van } = useOutletContext()

	return (
		<>
			<span className="text-xl font-semibold">${van.price}.00</span>/day
		</>
	)
}
