import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';




//___________________________


  const Wrapper = styled.div`
    width:${props => props.width};
    height: ${props => props.height};
  `;

    
    
    

  class Map extends React.Component{
    componentDidMount(){
      this.map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 6,
        zoomControl: false
      });
        
      L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17,
      }).addTo(this.map);
    }
  render(){
    return(
      <Wrapper width="1200px" height="720px" id="map" />
    );
  }
}

export default Map;