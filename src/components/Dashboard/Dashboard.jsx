import React from 'react';
import './Dashboard.css';
import { supabase} from '../../utils/supabaseClient';

const Dashboard = () => {
  const stats = {
    totalExpenses: 0,
    numberOfClasses: 0,
    upcomingEvents: 0,
    completedTasks: 0,
  };

  return (
    <div className="DashboardContainer">
      <h1 className="DashboardTitle">Welcome Back to Your Dashboard</h1>

      {/*//! Quick Stats */}
      <div className="DashboardStats">
        <div className="StatItem">
          <h2>Today's Expenses</h2>
          <p>${stats.totalExpenses}</p>
        </div>
        <div className="StatItem">
          <h2>Today's Classes</h2>
          <p>{stats.numberOfClasses}</p>
        </div>
        <div className="StatItem">
          <h2>Upcoming Events</h2>
          <p>{stats.upcomingEvents}</p>
        </div>
        <div className="StatItem">
          <h2>Completed Tasks</h2>
          <p>{stats.completedTasks}</p>
        </div>
      </div>

      {/*//! Action Buttons */}
      <div className="DashboardActions">
        <button className="ActionButton" onClick={() => console.log('Open Calendar')}>
          View Calendar
        </button>
        <button className="ActionButton" onClick={() => console.log('Open Expenses')}>
          View Expenses
        </button>
        <button className="ActionButton" onClick={() => console.log('Open Tasks')}>
          View Tasks
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
