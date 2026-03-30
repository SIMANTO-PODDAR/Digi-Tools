import Logo from '../../Images/digitools.png'
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartItems, tabTgl }) => {
    return (
        <div className='mt-3 sticky top-0 z-99'>
            <div className="navbar bg-base-100 shadow-sm font-bold">
                <div className="navbar-start flex items-center">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => tabTgl(false)} className='btn rounded-full flex font-bold cursor-pointer'> <FiShoppingCart />
                    </button>
                    <span onClick={() => tabTgl(false)}
                        className={`${cartItems.length > 0 ? '' : 'hidden'}
                    mb-8 mr-5 p-1 rounded-full bg-red-500`}>{cartItems.length}</span>
                    <a className="mr-3">Login</a>
                    <a className="btn rounded-full text-white bg-linear-to-r from-purple-900 to-purple-600 font-bold">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;