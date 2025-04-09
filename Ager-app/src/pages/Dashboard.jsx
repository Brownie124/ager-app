import './Dashboard.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      <div className="logo-container">
        <img src={logo} alt="AGER logo" className="logo-icon" />
        <h1 className="logo-text">AGER</h1>
      </div>

      
      <div className="hexagon-grid">
        <Link to="/soil" className="dashboard-item water-hex">
          <div className="icon-container">💧</div>
        </Link>

        <Link to="/delivery" className="dashboard-item delivery-hex">
          <div className="icon-container">🚚</div>
        </Link>

        <Link to="/waste" className="dashboard-item waste-hex">
          <div className="icon-container">🍅</div>
        </Link>

        <Link to="/farming" className="dashboard-item farming-hex">
          <div className="icon-container">🚜</div>
        </Link>
      </div>

      
      <h2 className="dashboard-title">DASHBOARD</h2>
    </div>
  );
}

export default Dashboard;