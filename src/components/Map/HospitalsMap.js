import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';



class HospitalsMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hospitals: [

      ] 
    }
  }

  componentDidMount() {
    axios.get("https://places.cit.api.here.com/places/v1/discover/explore", {
      params: {
        app_id: 'm7oaMKyzvBVSCbZkqVNh',
        app_code: "wz6uMQMRHOibXv9XZSR6lg",
        at: '45.6796,-111.0363', 
        cat: 'hospital-health-care-facility'

      }
    })
      .then(response => {
        console.log(results.items.position);
        let hospitals = response.items.position.map((hospital, i) => {
          return {
            id: i,
            title: `${hospital.title} ${hospital.position}`,
          }
        })
        this.setState({ hospitals })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <LeafletMap
        center={[45.7770, -110.9429]}
        zoom={6}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[45.6796, -111.0363]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default HospitalsMap