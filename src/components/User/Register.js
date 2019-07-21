import React from 'react';
import Btn from '../Home/Button';
import Header from '../Home/Header';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Segment, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import Info from './Info'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../redux/action'

class Register extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Email' placeholder='Email' />
              <Form.Input fluid label='Username' placeholder='Username' />
              <Form.Input fluid label='Password' placeholder='Password' />
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Info/>
            <Button type='submit'>Submit</Button>
            <Btn text='Cancel' redirect={"/"} />
          </Form>
        </Segment>
        
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state, 
    user: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return (
    bindActionCreators(Actions, dispatch)
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));