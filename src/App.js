import React from 'react';
import { Movi } from './Movi'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Permanent+Marker&family=Stint+Ultra+Condensed&display=swap'); 
  @import url('https://fonts.googleapis.com/css?family=Aguafina+Script&display=swap'); */

body {
  /* font-family: 'Aguafina Script'; */
      /* color: blue; */
  }
`
function App() {
  return <React.StrictMode>  
    {/* <GlobalStyle  /> */}
    <Movi />
  </React.StrictMode>
}

export default App;
