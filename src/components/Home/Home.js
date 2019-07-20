import React from 'react';
import Button from './Button'
import Header from './Header'
import 'semantic-ui-css/semantic.min.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Are You Done Binging?!</h1>
        <Button text='yes, help!' redirect={"/yes"} />
        <Button text={`hell no \\m/ :P`} redirect={"/no"} />
      </div>
    );
  }
}
export default Home;