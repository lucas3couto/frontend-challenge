import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';

import { store, persistor } from './store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Routes />
                <GlobalStyles />
                <ToastContainer autoClose={3000} />
            </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
