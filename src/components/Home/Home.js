import React from 'react';
import Button from './Button'


class Home extends React.Component{
  render(){
  return (
    <div>
   <h1>Are You Done Binging?!</h1>
   <Button text='yes, help!'/>{` `}
   <Button text={`hell no \\m/ :P`}/>
   </div>
  );
}
}
export default Home;