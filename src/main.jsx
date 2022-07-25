import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import './index.css'

function App(){
  return ( 
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
