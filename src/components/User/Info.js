import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {  Icon } from 'semantic-ui-react'

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