import React from 'react';
import Btn from '../Home/Button';
import Header from '../Home/Header';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Segment, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import Info from './Info'

class Register extends React.Component {
  render() {
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
export default withRouter(Register);