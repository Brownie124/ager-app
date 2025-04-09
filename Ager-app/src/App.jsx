import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
//import SoilManagement from "./pages/SoilManagement";
// Initial commit test

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*<Route path="/soil" element={<SoilManagement />} />*/}
      </Routes>
    </Router>
  );
}

export default App;








