import React from 'react'
import Myparagraph from './Mypargraph';

const Demooutput = (props) => {
    console.log('DEMO OUTPUT');
  return (
    <Myparagraph>
      {props.show ? 'This is New!':''}
      </Myparagraph>
  )
}

export default React.memo(Demooutput);
