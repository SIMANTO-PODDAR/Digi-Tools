import { useState } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'
import TogglingSection from './assets/Components/TogglingSection/TogglingSection'

function App() {
  // for tab toggle
  const [tab, setTab] = useState(true)
  const tabTgl = (value) => {
    setTab(value)
  }

  return (
    <div>
      <Navbar />
      <Banner />

      <TogglingSection tabTgl={tabTgl} tab={tab} />

    </div>
  )
}

export default App
