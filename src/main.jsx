import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter } from 'react-router'
import Router from './Router/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Router></Router>
    </BrowserRouter>
  </StrictMode>,
)
