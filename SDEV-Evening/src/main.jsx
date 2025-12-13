import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App, Greetings} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greetings message='Hello User, Lets Learn React'/>
  </StrictMode>,
)
