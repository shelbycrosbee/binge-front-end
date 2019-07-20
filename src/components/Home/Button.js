import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button as Btn} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


function Button( props ){
  const redirect = (route) => {
    props.history.push(route)
  }

  return(
    <Btn onClick={e => redirect(props.redirect)}>{ props.text }</Btn>
  )
}

export default withRouter(Button);
