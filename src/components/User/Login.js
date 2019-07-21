import React from 'react';
import Btn from '../Home/Button';
import Header from '../Home/Header';
import 'semantic-ui-css/semantic.min.css';
import { 
  Button, 
  Form, 
  Segment 
} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/action'


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '', 
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.userRegister(this.state);
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Header />
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
              <Form.Input fluid label='Password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
            </Form.Group>
            <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));