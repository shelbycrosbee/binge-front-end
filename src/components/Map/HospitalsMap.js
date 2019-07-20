import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';



class HospitalsMap extends React.Component {
  constructor(props) {
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
        at: '45.6796,-111.0363', //user geolocation
        cat: 'hospital-health-care-facility'

      }
    })
      .then(response => {
        // console.log(response.data.results);
        let hospitals = response.data.results.items.map((hospital, i) => {
          return {
            id: i,
            position: hospital.position,
            title: `${hospital.title}`,
          }
        })
        this.setState({ hospitals })
        // console.log(this.state.hospitals[1].position)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const loc = this.state.hospitals.map(i => {
      return (<Marker position={i.position}>
        <Popup>
          {i.title}
        </Popup>
      </Marker>
      )
    })
    return (
      <LeafletMap
        center={[45.7770, -110.9429]} //user geolocation
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
        {loc}
      </LeafletMap>
    );
  }
}

export default HospitalsMap