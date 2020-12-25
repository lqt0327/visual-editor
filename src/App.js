import React from 'react';
import './App.css';
import { HashRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';

function App() {
  return (
    <HashRouter>
      {
        renderRoutes(routes)
      }
    </HashRouter>
  );
}

export default App;
