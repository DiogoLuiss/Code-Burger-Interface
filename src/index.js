import React from 'react';
import ReactDOM from 'react-dom';

import Routes from "./routes"
import  GlobalStyle  from "../src/GlobalStyled"


ReactDOM.render(
<><Routes/>  <GlobalStyle/>  </>,
  document.getElementById('root')
);

