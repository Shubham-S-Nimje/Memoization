import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import Demolist from './components/Demo/Demolist';
import Buttonsort from './components/UI/Button/Buttonsort';
// import Demooutput from './components/Demo/Demooutput';

function App() {
  // const [ShowPara, SetShowPara] = useState(false);
  // const [AllowToggler, SetAllowToggler] = useState(false);
  const [listTitle, setListTitle] = useState('My List');
  const [sortTitle, setsortTitle] = useState('Change to Decending Order');
  

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const SortTitleHandler = useCallback(() => {
    if(sortTitle === 'Change to Decending Order'){
      setsortTitle('Change to Ascending Order');
    }
    else{
      setsortTitle('Change to Decending Order');
    }
  }, [sortTitle]);


  // console.log('APP RUNNING');

  // const ToogleParaHandler = useCallback(() => {
  //   if(AllowToggler) {
  //   SetShowPara(preShowPara => !preShowPara);
  //   }
  // },[AllowToggler]);
  
  // const AllowToggleHandler = () => {
  //   SetAllowToggler(true);
  // }

  const listItems = useMemo(() => [5,3,1,10,9], [])

  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}
      {/* <Demooutput show={ShowPara}/>
      <Button onClick={AllowToggleHandler}>Allow Toggle</Button>
      <Button onClick={ToogleParaHandler}>Toggle Paragraph</Button> */}
      <Demolist title={listTitle} items={listItems} sortTitle={sortTitle}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Buttonsort onClick={SortTitleHandler} items={listItems}>{sortTitle}</Buttonsort>
    </div>
  );
}

export default App;
