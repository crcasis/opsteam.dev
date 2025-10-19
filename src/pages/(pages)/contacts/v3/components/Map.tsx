import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

const Map = () => {
  const center: [number, number] = [28.5384, -81.3789]
  const zoom = 10

  const markers = [
    {
      position: [28.5384, -81.3789] as [number, number],
      popup: (
        <div className="p-3">
          <h6>We are in Orlando, FL</h6>
          <p className="fs-sm pt-1 mt-n3 mb-0">514 Magnolia St. Orlando, FL 32806</p>
        </div>
      ),
    },
  ]

  return (
    <section className="position-relative">
      <div className="d-none d-xl-block" style={{ height: 570 }} />
      <div className="d-none d-lg-block d-xl-none" style={{ height: 450 }} />
      <div className="d-none d-md-block d-lg-none" style={{ height: 380 }} />
      <div className="d-md-none" style={{ height: 280 }} />
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((marker, i) => (
            <Marker key={i} position={marker.position}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}

export default Map
