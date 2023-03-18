import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from './components/Loading'
const Home = lazy(() => import('./containers/Home/Home'))

function App() {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Suspense>
			<ToastContainer
				style={{
					fontSize: '1.4rem'
				}}
			/>
		</Router>
	)
}

export default App
