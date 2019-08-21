import React from 'react';
import Button from './Button'
import Header from './Header'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid textAlign='center' container>
          <Grid.Row  >
            <Grid.Column>
              <h1>Gored Yet?!</h1>
              <Button text='Yes, take me to a doctor!' redirect={"/yes"} />
              <Button text={`I can get closer, where are the bison at?`} redirect={"/no"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Home;