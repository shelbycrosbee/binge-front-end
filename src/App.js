import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import OtherMap from './components/Map/OtherMap'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <OtherMap />
      </div>
    );
  }
}
export default App;
