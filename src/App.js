import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { ToastContainer } from "react-toastify";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </Router>
    </PersistGate>
  </Provider>
)

export default App