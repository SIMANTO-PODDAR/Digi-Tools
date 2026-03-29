import { Suspense, useState } from 'react';
import './App.css';
import Banner from './assets/Components/Banner/Banner';
import Navbar from './assets/Components/Navbar/Navbar';
import TogglingSection from './assets/Components/TogglingSection/TogglingSection';
import Cards from './assets/Components/Cards/Cards';
import FallbackUI from './assets/Components/Fallback/FallbackUI';
import Cart from './assets/Components/Cart/Cart';


//            for data
const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const fetchPromise = fetchData();


function App() {
  //            for tab toggle
  const [tab, setTab] = useState(true)
  const tabTgl = (value) => {
    setTab(value)
  }

  //            for Cart
  const [cartItems, setCartItems] = useState([])
  const handleCartItems = (nItem) => {
    const newCartArr = [...cartItems, nItem]
    setCartItems(newCartArr)
  }


  return (
    <div>
      <Navbar cartItems={cartItems} tabTgl={tabTgl} />
      <Banner />

      <TogglingSection tabTgl={tabTgl} tab={tab} cartItems={cartItems} />

      <Suspense fallback={<FallbackUI />}>
        <Cards fetchPromise={fetchPromise} tab={tab} handleCartItems={handleCartItems} />
      </Suspense>

      <Cart tab={tab} cartItems={cartItems} />

    </div>
  )
}

export default App
