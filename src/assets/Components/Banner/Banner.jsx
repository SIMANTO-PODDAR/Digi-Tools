import { FaRegDotCircle } from 'react-icons/fa';
import BannerImg from '../../Images/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <section className="relative overflow-hidden pt-10 pb-20 md:py-24">
            
            {/* Ambient background glows */}
            <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/10 w-125 h-125 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12'>

                    {/* Content Area */}
                    <div className='flex-1 text-center lg:text-left space-y-6 max-w-2xl'>
                        
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold shadow-sm animate-pulse-glow">
                            <FaRegDotCircle className="text-indigo-500 animate-pulse" />
                            <span>New: AI-Powered Tools Available</span>
                        </div>

                        {/* Title with Gradient */}
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white'>
                            Supercharge Your <br />
                            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                Digital Workflow
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        </p>

                        {/* Call to Actions */}
                        <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-2'>
                            <a 
                                href="#products" 
                                className="btn rounded-full px-8 py-3 text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-none shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all font-bold"
                            >
                                Explore Products
                            </a>
                            <a 
                                href="#" 
                                className="btn rounded-full px-8 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all font-bold gap-2"
                            >
                                <CiPlay1 className="text-indigo-500 stroke-[1.5]" />
                                Watch Demo
                            </a>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className='flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none'>
                        <div className='relative w-full max-w-lg animate-float-slow'>
                            {/* Glow element behind image */}
                            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
                            
                            <img 
                                src={BannerImg} 
                                alt="Banner Graphic" 
                                className="relative z-10 w-full object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.15)] dark:drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)] brightness-105"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Statistics Strip */}
            <div className="mt-20 border-y border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm py-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        
                        <div className="p-4 transition-transform hover:scale-105">
                            <h2 className="text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">50K+</h2>
                            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">Active Users</p>
                        </div>

                        <div className="p-4 border-y sm:border-y-0 sm:border-x border-slate-200/60 dark:border-slate-800/60 transition-transform hover:scale-105">
                            <h2 className="text-5xl font-black bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">200+</h2>
                            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">Premium Tools</p>
                        </div>

                        <div className="p-4 transition-transform hover:scale-105">
                            <h2 className="text-5xl font-black bg-linear-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">4.9</h2>
                            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">User Rating</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
