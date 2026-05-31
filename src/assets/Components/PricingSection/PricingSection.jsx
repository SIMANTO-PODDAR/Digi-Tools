import { FiCheck } from "react-icons/fi";

const PricingSection = () => {
    return (
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
            
            {/* Section Header */}
            <div className='text-center max-w-xl mx-auto space-y-3 mb-16'>
                <h2 className='text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight'>
                    Simple, Transparent Pricing
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">

                {/* Starter Plan */}
                <div className="card glass-card rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Starter</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Perfect for getting started</p>
                        </div>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">$0</span>
                            <span className="text-xs font-semibold text-slate-400 uppercase ml-1">/Month</span>
                        </div>

                        <ul className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800/40">
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Basic templates</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Community support</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-8">
                        <button className="w-full py-3.5 px-6 rounded-full font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm shadow-md">
                            Get Started Free
                        </button>
                    </div>
                </div>

                {/* Pro Plan (Featured) */}
                <div className="glow-border animate-pulse-glow flex flex-col justify-between p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-slate-900 dark:bg-slate-950 text-white relative">
                    <div className="absolute top-4 right-6">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-amber-400 text-slate-900">
                            Most Popular
                        </span>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black">Pro</h3>
                            <p className="text-slate-400 text-sm">Best for professionals</p>
                        </div>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-black">$29</span>
                            <span className="text-xs font-semibold text-slate-400 uppercase ml-1">/Month</span>
                        </div>

                        <ul className="space-y-4 pt-6 border-t border-slate-800">
                            <li className="flex items-center text-sm text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Access to all premium tools</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Unlimited templates</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Unlimited projects</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Cloud sync & backups</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-8">
                        <button className="w-full py-3.5 px-6 rounded-full font-bold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm shadow-lg shadow-indigo-500/20">
                            Start Pro Trial
                        </button>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="card glass-card rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Enterprise</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">For teams and businesses</p>
                        </div>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">$99</span>
                            <span className="text-xs font-semibold text-slate-400 uppercase ml-1">/Month</span>
                        </div>

                        <ul className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800/40">
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Everything in Pro</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Team collaboration tools</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Custom integrations</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Dedicated accounts support</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>SLA guarantee</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                <span className="mr-3 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"><FiCheck size={12} className="stroke-[3]" /></span>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-8">
                        <button className="w-full py-3.5 px-6 rounded-full font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm shadow-md">
                            Contact Sales
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default PricingSection;