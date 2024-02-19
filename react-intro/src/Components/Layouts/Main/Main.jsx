import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './Main.css'

export const Main = ({children}) => {
  return (
    <main>
      {children}
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)