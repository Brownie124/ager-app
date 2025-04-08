import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
// Initial commit test

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;








