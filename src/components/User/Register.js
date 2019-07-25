import React from 'react';
import Btn from '../Home/Button';
import Header from '../Home/Header';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Form,
  Segment,
  Grid
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Info from './Info'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/action'



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.userRegister(this.state, this.props.history);
   
  }

  render() {
    return (
      <div>
        <Header />
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email' />
              <Form.Input fluid label='username' name='username' value={this.state.username} onChange={this.handleChange} placeholder='Username' />
              <Form.Input fluid label='password' type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Password' />
            </Form.Group>
            <Grid padded>
              <Grid.Row>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Info/>
              </Grid.Row>
            </Grid>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));