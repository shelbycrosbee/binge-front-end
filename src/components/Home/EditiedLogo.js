import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router-dom';
import logo from '../../images/editedlogo.png'


class EditedLogo extends React.Component {
  redirectHome() {
    this.props.history.push('/')
  }
  render() {
 
    return (
      <div  onClick={e => this.redirectHome()}>
        <img src={logo} alt='logo'/>
      </div>
    )
  }
}

export default withRouter(EditedLogo)