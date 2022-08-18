import { useState } from 'react'
import { CustomMeal } from './components/CustomMeal'
import { Footer } from './components/Footer'
import { TheWhy } from './components/TheWhy'

import './index.css'

function App() {
	return (
		<div className='bg-gray/[.06] w-screen  '>
			<CustomMeal />
			<TheWhy />
			<Footer />
		</div>
	)
}

export default App
