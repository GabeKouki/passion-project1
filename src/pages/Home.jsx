import React from 'react'
import Login from '../components/Login/Login'
import Dashboard from '../components/Dashboard/Dashboard'

const Home = () => {
  const session = false;


  if (!session) {
    return (
      <Login />
    )
  } else {
    return (
      <Dashboard />
    )
  }

  return (
    <div className="HomepageContainer">
      
    </div>
  )
}

export default Home
