import './App.css';
import React, { useRef } from 'react';
import {Charti} from './Charti'
import {Movi} from './Movi'

function App() {
  const ref = useRef();
const divStyle = {
  background: 'smokewhite',
};
  

  return (
    <div style={divStyle} ref={ref}>
    {/* <Charti /> */}
    <Movi />
    </div>
  );
}

export default App;
