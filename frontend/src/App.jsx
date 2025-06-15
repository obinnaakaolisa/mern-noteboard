import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNote from './pages/CreateNote'
import ViewNote from './pages/ViewNote'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>      
      <button onClick={ () => toast.success("Congratulations!")}>Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/view/:id" element={<ViewNote />} />        
      </Routes>

    </div>
  )
}

export default App