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
        <Button text='yes, help!' />{` `}
        <Button text={`hell no \\m/ :P`} />
      </div>
    );
  }
}
export default Home;