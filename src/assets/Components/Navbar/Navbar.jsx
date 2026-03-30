import Logo from '../../Images/digitools.png'
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartItems, tabTgl }) => {
    return (
        <div className='pt-3 sticky top-0 z-99 bg-white'>

            <div className='mt-2 sticky top-1 z-99 max-w-400 mx-auto'>
                <div className="navbar bg-base-100 shadow-sm font-bold flex-col sm:flex-row">
                    <div className="navbar-start flex items-center">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="text-black/70"><a>Products</a></li>
                            <li className="text-black/70"><a>Features</a></li>
                            <li className="text-black/70"><a>Pricing</a></li>
                            <li className="text-black/70"><a>Testimonials</a></li>
                            <li className="text-black/70"><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end relative">
                        <button onClick={() => tabTgl(false)} className='btn rounded-full flex font-bold cursor-pointer hover:bg-linear-to-r from-purple-900 to-purple-600 hover:text-white'> <FiShoppingCart />
                        </button>

                        <span onClick={() => tabTgl(false)}
                            className={`absolute -top-4 mr-43 ${cartItems.length > 0 ? 'flex' : 'hidden'}
                        w-5 h-5 text-center  justify-center items-center p-4 rounded-full bg-red-500 text-white text-sm font-bold scale-70 md:scale-90`}> <span> {cartItems.length}</span> </span>

                        <a className="mx-3 pl-2">Login</a>
                        <a className="btn rounded-full text-white bg-linear-to-r from-purple-900 to-purple-600 font-bold">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;