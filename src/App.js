import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { ToastContainer } from "react-toastify";

const App = () => (
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
)

export default App
