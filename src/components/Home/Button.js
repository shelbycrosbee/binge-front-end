import React from 'react';
import {withRouter} from 'react-router-dom';




function Button( props ){
  const redirect = (route) => {
    props.history.push(route)
  }

  return(
    <button onClick={e => redirect(props.redirect)}>{ props.text }</button>
  )
}

export default withRouter(Button);
