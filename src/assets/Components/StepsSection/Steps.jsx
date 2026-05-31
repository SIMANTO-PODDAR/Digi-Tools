import UserImg from '../../Images/user.png';
import PackageImg from '../../Images/package.png';
import RocketImg from '../../Images/rocket.png';

const Steps = () => {
    return (
        <section id="features" className="bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30 py-20 scroll-mt-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        Get Started in 3 Steps
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Steps Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <div className="card glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/40 relative group hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-6 right-6">
                            <span className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700/50 flex items-center justify-center font-bold text-sm">
                                01
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-6 pt-4">
                            <div className="p-4.5 bg-indigo-50/50 dark:bg-slate-800 rounded-2xl w-20 h-20 flex items-center justify-center transition-colors duration-300">
                                <img className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500" src={UserImg} alt="Create Account" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                                Create Account
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                Sign up for free in seconds. No credit card required to get started.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="card glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/40 relative group hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-6 right-6">
                            <span className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700/50 flex items-center justify-center font-bold text-sm">
                                02
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-6 pt-4">
                            <div className="p-4.5 bg-indigo-50/50 dark:bg-slate-800 rounded-2xl w-20 h-20 flex items-center justify-center transition-colors duration-300">
                                <img className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500" src={PackageImg} alt="Choose Products" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                                Choose Products
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                Browse our catalog and select the premium tools that fit your needs.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="card glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/40 relative group hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-6 right-6">
                            <span className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700/50 flex items-center justify-center font-bold text-sm">
                                03
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-6 pt-4">
                            <div className="p-4.5 bg-indigo-50/50 dark:bg-slate-800 rounded-2xl w-20 h-20 flex items-center justify-center transition-colors duration-300">
                                <img className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500" src={RocketImg} alt="Start Creating" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                                Start Creating
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                Download and start using your premium tools immediately.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Steps;