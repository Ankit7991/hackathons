import React from 'react'
import { withAuth } from '../../component/hoc/withAuth';

function Dashboard() {
  return (
	<div>Dashboard</div>
  )
}


const AuthenticatedDashboard = withAuth(Dashboard);

export default AuthenticatedDashboard;