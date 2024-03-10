import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './Components/Navbar'
import Header_main from './Components/Header_main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header_main />
    {/* <App /> */}
  </React.StrictMode>,
)
