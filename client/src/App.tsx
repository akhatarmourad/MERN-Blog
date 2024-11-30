import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { About, Dashboard, ForgotPassword, Home, Projects, ResetPassword, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/sign-in" element={ <SignIn /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
        <Route path="/forgot-password" element={ <ForgotPassword /> } />
        <Route path="/reset-password" element={ <ResetPassword /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </Router>
  )
}

export default App
