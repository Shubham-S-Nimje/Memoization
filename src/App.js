import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import Demooutput from './components/Demo/Demooutput';

function App() {
  const [ShowPara, SetShowPara] = useState(false);
  const [AllowToggler, SetAllowToggler] = useState(false);


  console.log('APP RUNNING');

  const ToogleParaHandler = useCallback(() => {
    if(AllowToggler) {
    SetShowPara(preShowPara => !preShowPara);
    }
  },[AllowToggler]);
  
  const AllowToggleHandler = () => {
    SetAllowToggler(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demooutput show={ShowPara}/>
      <Button onClick={AllowToggleHandler}>Allow Toggle</Button>
      <Button onClick={ToogleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
