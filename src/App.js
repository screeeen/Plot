import './App.css';
import React, { useRef } from 'react';
import {Charti} from './Charti'


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
    <Charti />
    </div>
  );
}

export default App;
