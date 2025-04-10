import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Sprout, Droplets, MessageSquare, Settings } from 'lucide-react';

import '../pages/SoilMonitoring.css';

const data = [
  { name: '30 March', soil1: 20, soil2: 10, soil3: 15 },
  { name: '1 April', soil1: 25, soil2: 5, soil3: 30 },
  { name: '2 April', soil1: 35, soil2: 25, soil3: 20 },
  { name: '3 April', soil1: 40, soil2: 35, soil3: 15 },
  { name: '4 April', soil1: 45, soil2: 35, soil3: 40 },
];

const SoilMonitoring = () => {
  return (
    <div className="soil-monitoring">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <Sprout className="logo-icon" />
          <h1 className="logo-text">AGER</h1>
        </div>
        <h2 className="page-title">SOIL MONITORING</h2>
      </div>

      {/* Soil Report Card */}
      <div className="content">
        <div className="report-card">
          <h3 className="report-title">Soil Report</h3>
          <div className="metrics-container">
            <div className="metric">
              <div className="metric-value">
                <span>6.5</span>
              </div>
              <span className="metric-label">Moisture</span>
            </div>
            <div className="metric">
              <div className="metric-value">
                <span>6.5</span>
              </div>
              <span className="metric-label">pH Level</span>
            </div>
            <div className="metric">
              <div className="metric-value">
                <span>6.5</span>
              </div>
              <span className="metric-label">Temperature</span>
            </div>
          </div>
        </div>

        {/* Graph Card */}
        <div className="graph-card">
          <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="soil1" name="Soil 1" stroke="#8884d8" />
                <Line type="monotone" dataKey="soil2" name="Soil 2" stroke="#82ca9d" />
                <Line type="monotone" dataKey="soil3" name="Soil 3" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="navigation">
        <div className="nav-container">
          <div className="nav-buttons">
            <button className="nav-button">
              <Sprout className="nav-icon" />
              <span className="nav-label">Soil Monitoring</span>
            </button>
            <button className="nav-button">
              <Droplets className="nav-icon" />
              <span className="nav-label">Water Irrigation</span>
            </button>
            <button className="nav-button">
              <MessageSquare className="nav-icon" />
              <span className="nav-label">Chatbot</span>
            </button>
            <button className="nav-button">
              <Settings className="nav-icon" />
              <span className="nav-label">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilMonitoring;