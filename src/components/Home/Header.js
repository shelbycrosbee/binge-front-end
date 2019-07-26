import React, { Component } from 'react';
import { Menu, Segment, Header } from 'semantic-ui-react';
import "./index.css";
import EditedLogo from "./EditiedLogo"
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/action';

class MainHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleRedirect = (route) => this.props.history.push(route);


  handleLogout (){
    return
  }

  render() {
    const { activeItem } = this.state
    const username = this.props.userReducer['username']
    if(username===null){
       var displayName = 'Login';
    } 
    else {
      displayName = `logged in as ${this.props.userReducer['username']}`; 
    }

    return (
      
      <Segment inverted clearing>
        <Header >
          <EditedLogo className="logo" width='70px'/>
        <Menu floated='right' inverted pointing secondary>
          <Menu.Item
            name={displayName}
            active={activeItem === 'login'}
            onClick={e => this.handleRedirect('/login')}
          />
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={e => this.handleRedirect('/register')}
          />
          {/* <Menu.Item
          name={displayLogout} 
          active={activeItem === 'logout'}
          onClick={e => this.handleLogout}
          /> */}
        </Menu>
        </Header>
      </Segment>
    )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
