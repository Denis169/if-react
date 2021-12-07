import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import App from './containers/App';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
