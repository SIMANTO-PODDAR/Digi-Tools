import { useState, useEffect } from 'react';
import Logo from '../../Images/digitools.png'
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ cartItems, tabTgl, theme, toggleTheme }) => {
    const [isBouncing, setIsBouncing] = useState(false);

    useEffect(() => {
        if (cartItems.length > 0) {
            setIsBouncing(true);
            const timer = setTimeout(() => setIsBouncing(false), 300);
            return () => clearTimeout(timer);
        }
    }, [cartItems.length]);

    return (
        <div className='sticky top-0 z-50 glass-nav border-b border-slate-200/50 dark:border-slate-800/40 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="navbar min-h-16 py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    
                    {/* Brand Logo */}
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#" className="flex items-center cursor-pointer transition-transform hover:scale-105">
                            <img src={Logo} alt="logo" className="h-9 dark:brightness-110 dark:contrast-125 dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]" />
                        </a>
                        
                        {/* Mobile controls inside brand block if screen small */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button 
                                onClick={toggleTheme} 
                                className="btn btn-ghost btn-circle text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-transform duration-300 hover:rotate-12"
                            >
                                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                            </button>
                            
                            <button 
                                onClick={() => tabTgl(false)} 
                                className={`btn btn-ghost btn-circle relative text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 ${isBouncing ? 'scale-110' : ''}`}
                            >
                                <FiShoppingCart size={20} />
                                {cartItems.length > 0 && (
                                    <span className={`absolute top-1 right-1 w-5 h-5 flex justify-center items-center rounded-full bg-indigo-600 text-white text-[10px] font-bold ${isBouncing ? 'badge-bounce' : ''}`}>
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mid Links */}
                    <div className="hidden md:flex">
                        <ul className="flex items-center gap-8 font-semibold text-slate-600 dark:text-slate-300">
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</a></li>
                            <li><a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a></li>
                            <li><a href="#testimonials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Testimonials</a></li>
                            <li><a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* End Controls */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Theme Switcher Button */}
                        <button 
                            onClick={toggleTheme} 
                            className="btn btn-ghost btn-circle text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-transform duration-300 hover:rotate-12"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>

                        {/* Cart Button */}
                        <button 
                            onClick={() => tabTgl(false)} 
                            className={`btn btn-ghost btn-circle relative text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isBouncing ? 'scale-115' : ''}`}
                        >
                            <FiShoppingCart size={20} />
                            {cartItems.length > 0 && (
                                <span className={`absolute -top-1 -right-1 w-5 h-5 flex justify-center items-center rounded-full bg-indigo-600 text-white text-[10px] font-bold ${isBouncing ? 'badge-bounce' : ''}`}>
                                    {cartItems.length}
                                </span>
                            )}
                        </button>

                        <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold px-3 py-2 transition-colors">
                            Login
                        </a>
                        <a href="#" className="btn rounded-full px-6 text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 border-none shadow-md hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all font-bold">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;