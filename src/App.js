import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavPanel} from './Components/NavPanel/NavPanel';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './Components/UI/AppRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavPanel />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
