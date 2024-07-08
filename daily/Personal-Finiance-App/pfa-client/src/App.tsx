import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import { withAuth } from './component/hoc/withAuth'

const AuthenticatedDashboard = withAuth(Dashboard);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Routes>
			  <Route path='dashboard' element={<AuthenticatedDashboard />}/>
		</Routes>
    </>
  )
}

export default App
