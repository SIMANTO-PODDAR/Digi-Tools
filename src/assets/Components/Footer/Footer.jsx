import { BiLogoInstagramAlt } from 'react-icons/bi';
import FooterLogo from '../../Images/digitools-footer.png'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-white p-10 max-w-400 mx-auto">
                <aside>

                    <img className='w-45 h-10' src={FooterLogo} alt="FooterLogo" />
                    <p className=' text-white/50'>
                        Premium digital tools for creators, <br />
                        professionals, and businesses. Work smarter <br />
                        with our suite of powerful tools.

                    </p>
                </aside>
                <nav>
                    <h6 className="font-bold text-white">Product</h6>
                    <a className="link link-hover text-white/50">Features</a>
                    <a className="link link-hover text-white/50">Pricing</a>
                    <a className="link link-hover text-white/50">Templates</a>
                    <a className="link link-hover text-white/50">Integrations</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-white">Company</h6>
                    <a className="link link-hover text-white/50">About</a>
                    <a className="link link-hover text-white/50">Blog</a>
                    <a className="link link-hover text-white/50">Careers</a>
                    <a className="link link-hover text-white/50">Press</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-white">Resources</h6>
                    <a className="link link-hover text-white/50">Documentation</a>
                    <a className="link link-hover text-white/50">Help Center</a>
                    <a className="link link-hover text-white/50">Community</a>
                    <a className="link link-hover text-white/50">Contact</a>
                </nav>

                <nav>
                    <h6 className="font-bold text-white">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <div className='cursor-pointer flex justify-around items-center bg-amber-50 text-black p-2 font-bold rounded-full'>
                            <BiLogoInstagramAlt />
                        </div>
                        <div className='cursor-pointer flex justify-around items-center bg-amber-50 text-black p-2 font-bold rounded-full'>
                            <FaFacebookSquare />
                        </div>
                        <div className='cursor-pointer flex justify-around items-center bg-amber-50 text-black p-2 font-bold rounded-full'>
                            <FaSquareXTwitter />
                        </div>
                    </div>
                </nav>
            </footer>

            <div className=" bg-black/45 h-0.5 max-w-400 mx-auto"></div>

            <div className='max-w-400 mx-auto'>
                <div>
                    <footer className="footer sm:footer-horizontal items-center p-4 text-white/50">
                        <aside className="grid-flow-col items-center">
                            <p> © {new Date().getFullYear()} Digitools. All rights reserved.</p>
                        </aside>

                        <nav className="grid-flow-col gap-3 md:place-self-center md:justify-self-end ">
                            <h1 className=' link link-hover'>Privacy Policy</h1>
                            <h1 className=' link link-hover'>Terms of Service</h1>
                            <h1 className=' link link-hover'>Cookies</h1>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;