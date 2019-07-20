import React from 'react';
import Btn from '../Home/Button';
import Header from '../Home/Header';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Segment, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }


  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }


  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }


  render() {

    return (
      <div>
        <Icon name='info circle'
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        />

        {this.state.isHovering && <div>Snitches get scratches! 🐱</div>}

      </div>
    );
  }
}
export default Info;