
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './views/auth/auth'
import Chat from './views/chat/index'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
