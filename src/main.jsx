import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Hero></Hero>
    <Services></Services>
  </StrictMode>,
)
