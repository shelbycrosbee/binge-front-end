import React from 'react';
import OtherMap from '../Map/OtherMap';
import Header from '../Home/Header';
import { Grid } from 'semantic-ui-react'

class No extends React.Component {

  render() {
    return (
     <div>
      <Header />
      <Grid>
          <Grid.Column></Grid.Column>
            <Grid.Column>
            <OtherMap /> 
            </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      
    </div>
    )
  }
}

export default No