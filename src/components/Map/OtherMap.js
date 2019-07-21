import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class OtherMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.setState({ currentPos: e.latlng });
  }


  render() {
    return (
      <LeafletMap
        onClick={this.handleClick}
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
        {this.state.currentPos && <Marker position={this.state.currentPos} draggable={false}>
          <Popup position={this.state.currentPos}>
            Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
          </Popup>
        </Marker>}
      </LeafletMap>
    );
  }
}

export default OtherMap