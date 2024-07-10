import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './page/dashboard/Dashboard'
import { withAuth } from './component/hoc/withAuth'
import AuthenticatedDashboard from './page/dashboard/Dashboard'



function App() {

  return (
    <>
		<Routes>
			  <Route path='dashboard' element={<AuthenticatedDashboard />}/>
		</Routes>
    </>
  )
}

export default App
