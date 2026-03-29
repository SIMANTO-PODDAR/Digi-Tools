import { Suspense, useState } from 'react';
import './App.css';
import Banner from './assets/Components/Banner/Banner';
import Navbar from './assets/Components/Navbar/Navbar';
import TogglingSection from './assets/Components/TogglingSection/TogglingSection';
import Cards from './assets/Components/Cards/Cards';
import FallbackUI from './assets/Components/Fallback/FallbackUI';


//            for data
const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const fetchPromise = fetchData();


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

      <Suspense fallback={<FallbackUI />}>
        <Cards fetchPromise={fetchPromise} />
      </Suspense>

    </div>
  )
}

export default App
