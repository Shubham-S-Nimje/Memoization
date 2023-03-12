import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import Demooutput from './components/Demo/Demooutput';

function App() {
  const [ShowPara, SetShowPara] = useState(false);

  console.log('APP RUNNING');

  const ToogleParaHandler = useCallback(() => {
    SetShowPara(preShowPara => !preShowPara);
  },[]);


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demooutput show={false}/>
      <Button onClick={ToogleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
