import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Reading from '../pages/reading/Reading'

function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />} />
              <Route path='/reading' element={<Reading/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default Router