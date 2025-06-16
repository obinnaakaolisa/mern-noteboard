import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNote from './pages/CreateNote'
import ViewNote from './pages/ViewNote'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/create" element={<CreateNote />} />
        <Route path="/notes/:id" element={<ViewNote />} />        
      </Routes>
    </div>
  )
}

export default App