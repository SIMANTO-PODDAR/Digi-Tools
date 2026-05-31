import { Suspense, useState, useEffect } from 'react';
import './App.css';
import Banner from './assets/Components/Banner/Banner';
import Navbar from './assets/Components/Navbar/Navbar';
import TogglingSection from './assets/Components/TogglingSection/TogglingSection';
import Cards from './assets/Components/Cards/Cards';
import FallbackUI from './assets/Components/Fallback/FallbackUI';
import Cart from './assets/Components/Cart/Cart';
import { toast } from 'react-toastify';
import Steps from './assets/Components/StepsSection/Steps';
import PricingSection from './assets/Components/PricingSection/PricingSection';
import Footer from './assets/Components/Footer/Footer';
import Explore from './assets/Components/Explore/Explore';


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

  //            for Theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  //            for Cart
  const [cartItems, setCartItems] = useState([])
  const handleCartItems = (nItem) => {

    if (!cartItems.includes(nItem)) {
      const newCartArr = [...cartItems, nItem]
      setCartItems(newCartArr)
      toast.success(`${nItem.name} Added to Cart!`)
    }
    else {
      toast.warning(`${nItem.name} Already in Cart!`)
    }

  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar cartItems={cartItems} tabTgl={tabTgl} theme={theme} toggleTheme={toggleTheme} />
      <Banner />

      <TogglingSection tabTgl={tabTgl} tab={tab} cartItems={cartItems} />

      <Suspense fallback={<FallbackUI />}>
        <Cards fetchPromise={fetchPromise} tab={tab} handleCartItems={handleCartItems}
          cartItems={cartItems} />
      </Suspense>

      <Cart tab={tab} cartItems={cartItems} setCartItems={setCartItems} />

      <Steps />

      <PricingSection />

      <Explore />
      <Footer />

    </div>
  )
}

export default App

