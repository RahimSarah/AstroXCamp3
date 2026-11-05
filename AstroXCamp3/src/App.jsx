import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Admin from './pages/Admin'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />   
   </Routes>
  )
}

export default App