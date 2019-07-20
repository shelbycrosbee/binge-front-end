import React from 'react';
import OtherMap from '../Map/OtherMap';
import Header from '../Home/Header';
import { ReactLeafletSearch } from 'react-leaflet-search';


class Yes extends React.Component {

render(){


  return(
    <div>
    <Header/>

    <OtherMap />
    </div>
  );
}

}

export default Yes