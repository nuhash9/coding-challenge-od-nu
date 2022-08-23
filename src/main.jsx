import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import FavoritesContextProvider from './contexts/FavoritesContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>
)
