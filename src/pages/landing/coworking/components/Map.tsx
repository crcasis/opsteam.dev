import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { JSX } from 'react'
import { Card, CardBody } from 'react-bootstrap'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'

const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

type MarkerType = {
  position: [number, number]
  popup: JSX.Element
}

const mobileMarkers: MarkerType[] = [
  {
    position: [51.59, 0.3338],
    popup: (
      <div className="p-3">
        <h6>Hi, we are in London</h6>
        <p className="fs-sm pt-1 mt-n3 mb-0">Lorem ipsum dolor sit amet elit.</p>
      </div>
    ),
  },
  {
    position: [51.4074, 0.1838],
    popup: (
      <div className="p-3">
        <h6>Hi, we are in London</h6>
        <p className="fs-sm pt-1 mt-n3 mb-0">Lorem ipsum dolor sit amet elit.</p>
      </div>
    ),
  },
]

const desktopMarkers: MarkerType[] = [
  {
    position: [51.59, 0.3338],
    popup: (
      <div className="p-3">
        <h6>Hi, we are in London</h6>
        <p className="fs-sm pt-1 mt-n3 mb-0">5217 Apartment. 705 Childerditch Ln.</p>
      </div>
    ),
  },
  {
    position: [51.4074, 0.1838],
    popup: (
      <div className="p-3">
        <h6>Hi, we are in London</h6>
        <p className="fs-sm pt-1 mt-n3 mb-0">5211 Valley Apt. 667 Victoria Hill Rd.</p>
      </div>
    ),
  },
]

const Map = () => {
  return (
    <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xxl-5 mb-n4 mb-md-n2 mb-lg-0">
      <div className="d-lg-none rounded-5 overflow-hidden" style={{ height: 350 }}>
        <MapContainer center={[51.5074, -0.1278]} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mobileMarkers.map((m, i) => (
            <Marker key={i} position={m.position}>
              <Popup>{m.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="position-relative overflow-hidden rounded-5 px-lg-5 mt-lg-3 mt-xl-5">
        <div className="d-none d-xxl-block" style={{ height: 160 }} />
        <div className="d-none d-xl-block d-xxl-none" style={{ height: 130 }} />
        <div className="d-none d-lg-block d-xl-none" style={{ height: 100 }} />
        <div className="position-relative z-5 ms-lg-5" style={{ maxWidth: 530 }}>
          <Card className="border-0">
            <CardBody>
              <h2 className="h4 mb-sm-4">Around Space</h2>
              <div className="d-sm-flex mb-3">
                <div className="mb-3 mb-sm-0 me-sm-4">
                  <p className="mb-0">5211 Valley Apt. 667 Victoria Hill Rd., London</p>
                  <p className="mb-0">+1 526 220 0459</p>
                </div>
                <div className="d-none d-sm-block border-end" />
                <div className="ms-sm-4">
                  <p className="mb-0">5217 Apartment. 705 Childerditch Ln., London</p>
                  <p className="mb-0">+1 526 220 5439</p>
                </div>
              </div>
              <Link to="mailto:email@xample.com">email@xample.com</Link>
            </CardBody>
          </Card>
        </div>
        <div className="d-none d-xxl-block" style={{ height: 160 }} />
        <div className="d-none d-xl-block d-xxl-none" style={{ height: 130 }} />
        <div className="d-none d-lg-block d-xl-none" style={{ height: 100 }} />

        <div className="d-none d-lg-block position-absolute z-1 top-0 start-0 w-100 h-100">
          <MapContainer center={[51.5074, -0.1278]} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {desktopMarkers.map((m, i) => (
              <Marker key={i} position={m.position}>
                <Popup>{m.popup}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

export default Map
