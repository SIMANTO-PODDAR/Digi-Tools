import { useState } from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import FooterLogo from '../../Images/digitools-footer.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            toast.success(`Subscribed successfully with ${email}!`);
            setEmail('');
        }
    };

    return (
        <div className='bg-[#0B0F19] text-white border-t border-slate-900 pt-16 pb-8 transition-colors duration-300'>
            <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Links & Newsletter */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/60">
                    
                    {/* Brand Column */}
                    <div className="space-y-4 lg:col-span-2">
                        <img className='h-9 w-auto brightness-110' src={FooterLogo} alt="FooterLogo" />
                        <p className='text-slate-400 text-sm max-w-sm leading-relaxed'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#" className='w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center text-slate-400' aria-label="Instagram">
                                <BiLogoInstagramAlt size={18} />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center text-slate-400' aria-label="Facebook">
                                <FaFacebookSquare size={16} />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center text-slate-400' aria-label="Twitter">
                                <FaSquareXTwitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase mb-4">Product</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription Column */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase">Stay Updated</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Subscribe to get latest updates, deals and tutorials.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-slate-900 border border-slate-800 text-slate-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-indigo-500 w-full"
                                required
                            />
                            <button 
                                type="submit" 
                                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full text-xs font-bold text-white transition-all whitespace-nowrap cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Section: Copyright & Legal Links */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Digitools. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Cookies Settings</a>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;