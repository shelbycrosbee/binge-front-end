import React from 'react';
import HospitalsMap from '../Map/HospitalsMap';
import Header from '../Home/Header';
import { Grid } from 'semantic-ui-react';




class Yes extends React.Component {

  render() {


    return (
      <div>
        <Header />
        <Grid container columns={1}>
          {/* <Grid.Column></Grid.Column> */}
            <Grid.Column>
            <HospitalsMap />
            </Grid.Column>
          {/* <Grid.Column></Grid.Column> */}
        </Grid>

      </div>
    );
  }

}

export default Yes