import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import { Route, withRouter, Switch } from 'react-router-dom'
import Yes from './components/Home/Yes';
// import No from './components/Home/No';
import Register from './components/User/Register';
import Login from './components/User/Login'
import Marker from './components/Home/No'


class App extends React.Component {


  render() {

    

    return (
      <div>
        <Switch>
        <Route path="/yes" component={Yes}/>
        <Route exact path="/" component={Home} />
        {/* <Route path="/no" component={No}/> */}
        <Route path='/no' component={Marker}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
