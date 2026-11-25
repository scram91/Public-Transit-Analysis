import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

//Placeholder points to prove the map works. Will be replaced later

const sampleStops = [
    { id: 1, name: '15th St (City Hall)', lat: 39.9522, lon: -75.1654 },
    { id: 2, name: 'Frankford Transportation Center', lat: 40.0231, lon: -750775 }
]

export default function TransitMap() {
    return (
	    <MapContainer
	center={[39.9526, -751652]}
	zoom={11}
	style={{height: '100vh', width: '100%' }}
	    >
		<TileLayer
		attribution='&copy; OpenStreetMap contributers'
		url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		{sampleStops.map((s) => (
		    <CircleMarker key={s.id} center={[s.lat, s.lon]} radius={6}>
			<Popup>{s.name}</Popup>
		    </CircleMarker>
		))}
	    </MapContainer>
    )
}
