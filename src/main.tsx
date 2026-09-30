import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import Nav from './Components/Nav.tsx'
import Footer from './Components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Nav />
    <Footer />
    <Toaster
  position="top-right"
  reverseOrder={true}
/>
  </StrictMode>,
)
