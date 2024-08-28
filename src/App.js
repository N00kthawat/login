import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './Page/Login.css';
import './Page/Register.css';
import './Page/Home/Home.css';


import LoginPage from './Page/Login';
import RegisterPage from './Page/Register';
import HomePage from './Page/Home/Home';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                </Routes>
    </Router>
  )
}


export default App