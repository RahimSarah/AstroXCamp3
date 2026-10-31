import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Form from './pages/Form'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />   
   </Routes>
  )
}

export default App