import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
