import Logo from '../../Images/digitools.png'
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className='m-3'>
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
                    <span className='flex mx-3.5 font-bold'> <FiShoppingCart /> </span>
                    <span className='mb-8 mr-7 p-1 rounded-full bg-amber-600'>1</span>
                    <a className="mr-3">Login</a>
                    <a className="btn rounded-full text-white bg-violet-600 font-bold">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;