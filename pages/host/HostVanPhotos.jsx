import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
	const { van } = useOutletContext()

	return (
		<>
			<img className="size-25 rounded-md" src={van.imageUrl} />
		</>
	)
}
