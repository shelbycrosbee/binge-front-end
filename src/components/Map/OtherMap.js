import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/action';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class OtherMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
      locations: []
    };
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    try {
      const locations = await axios.get('/location', {
        headers: {
          authorization: this.props.tokenReducer['token']
        }
      })
      this.setState({ locations: locations.data })
    }
    catch (error) {
      console.log(error)
      alert('You need to login to access this feature!')
    }

  }

  handleClick(e) {
    this.setState({ currentPos: e.latlng });
  }

  handleSubmitLocation(e) {
    e.preventDefault();
    this.props.addLocation(this.state.currentPos);
    window.location.reload();
  }


  render() {

    const markers = this.state.locations.map(location => {
      return <Marker position={{ lat: location.lat, lng: location.long }} draggable={false}><Popup position={{ lat: location.lat, lng: location.long }}>
        Bison sighting: <pre>{JSON.stringify({ lat: location.lat, lng: location.long }, null, 2)}</pre>
      </Popup> </Marker>
    });
    return (
      <>
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
          {markers}
          {this.state.currentPos && <Marker position={this.state.currentPos} draggable={false}>
            <Popup position={this.state.currentPos}>
              Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              <button onClick={this.handleSubmitLocation}> Big ol' Bison </button>
            </Popup>
          </Marker>}
        </LeafletMap>
      </>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    ...state,
    username: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return (
    bindActionCreators(Actions, dispatch)
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OtherMap));