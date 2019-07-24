import React, { Component } from 'react';
import { Menu, Segment, Header } from 'semantic-ui-react';
import "./index.css";
import Logo from "./Logo";
import {withRouter} from 'react-router-dom';

class MainHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleRedirect = (route) => this.props.history.push(route)

  render() {
    const { activeItem } = this.state

    return (
      
      <Segment inverted clearing>
        <Header >
          <Logo className="logo" width='700px'/>
        <Menu floated='right' inverted pointing secondary>
          <Menu.Item
            name='Login' 
            active={activeItem === 'login'}
            onClick={e => this.handleRedirect('/login')}
          />
          <Menu.Item
            name='Register' 
            active={activeItem === 'register'}
            onClick={e => this.handleRedirect('/register')}
          />
        </Menu>
        </Header>
      </Segment>
    )
  }
}

export default withRouter(MainHeader);