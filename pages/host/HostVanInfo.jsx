import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
	const { van } = useOutletContext()

	return (
		<section className="space-y-5">
			<h4 className="font-bold">
				Name: <span>{van.name}</span>
			</h4>
			<h4 className="font-bold">
				Category: <span className="font-medium">{van.type}</span>
			</h4>
			<h4 className="font-bold">
				Description: <span className="font-medium">{van.description}</span>
			</h4>
			<h4 className="font-bold">
				Visibility: <span className="font-medium">Public</span>
			</h4>
		</section>
	)
}
