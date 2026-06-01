const Explore = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-24 transition-colors duration-300">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-900/15">
                
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl transform -translate-x-20 translate-y-20 pointer-events-none"></div>
                
                <div className='relative z-10 px-6 py-16 sm:py-24 text-center max-w-3xl mx-auto space-y-6'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight'>
                        Ready to Transform Your Workflow?
                    </h2>
                    
                    <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                    </p>

                    <div className='flex flex-wrap justify-center gap-4 pt-4'>
                        <a 
                            href="#products" 
                            className="btn rounded-full px-8 py-3.5 bg-white text-indigo-600 hover:bg-slate-50 border-none font-bold shadow-md hover:scale-105 active:scale-95 transition-all text-sm"
                        >
                            Explore Products
                        </a>
                        <a 
                            href="#pricing" 
                            className="btn rounded-full px-8 py-3.5 bg-white/10 text-white border border-white/20 hover:bg-white/20 font-bold hover:scale-105 active:scale-95 transition-all text-sm"
                        >
                            View Pricing
                        </a>
                    </div>
                    
                    <p className="text-white/60 text-xs sm:text-sm pt-2 font-medium tracking-wide">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Explore;
