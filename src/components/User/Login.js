import React from 'react';
import Btn from '../Home/Button';
import Header from '../Home/Header';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Segment } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';


class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' />
              <Form.Input fluid label='Password' placeholder='Password' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
            <Btn text='Cancel' redirect={"/"} />
          </Form>
        </Segment>
        
      </div>
    );
  }
}
export default withRouter(Login);