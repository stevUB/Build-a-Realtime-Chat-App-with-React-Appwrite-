import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './componet/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import Room from './pages/Room'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {


  return (
    <Router>
      <AuthProvider>
      <Routes>

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/Register" element={<RegisterPage/>} />
        
        <Route element={<PrivateRoutes/>}>

          <Route path="/" element={<Room/>} />
        
        </Route>
        
      
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
