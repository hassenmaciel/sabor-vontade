import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartProvider'
import { EscolhaProvider } from './context/EscolhaProvider'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <EscolhaProvider>
          <App />
        </EscolhaProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
