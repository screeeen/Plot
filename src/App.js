import './App.css';
import React, { useRef } from 'react';
import {Charti} from './Charti'
import {Movi} from './Movi'

function App() {
  const ref = useRef();
const divStyle = {
  color: 'blue',
  background: 'smokewhite',
  height: '100vh',
  width: '100vw',
  border: '1px solid black'
};
  

  return (
    <div style={divStyle} ref={ref}>
    {/* <Charti /> */}
    <Movi />
    </div>
  );
}

export default App;
