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
              <h1>Are You Done Binging?!</h1>
              <Button text='yes, help!' redirect={"/yes"} />
              <Button text={`hell no \\m/ :P`} redirect={"/no"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Home;