import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNote from './pages/CreateNote'
import ViewNote from './pages/ViewNote'

const App = () => {
  return (
    <div data-theme="dracula">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/view/:id" element={<ViewNote />} />        
      </Routes>
    </div>
  )
}

export default App