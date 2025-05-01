import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Movi } from './Movi';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Movi />
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <Movi />
  </React.StrictMode>,
  document.getElementById('root')
);

