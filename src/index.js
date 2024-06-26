import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import 'normalize.css'
import './assets/css/index.less'
import store from './store'
import theme from '@/assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>
  </StrictMode>
)
