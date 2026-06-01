const TogglingSection = ({ tab, tabTgl, cartItems }) => {
    return (
        <div id="products" className='mt-16 md:mt-24 text-center max-w-4xl mx-auto px-4 scroll-mt-24'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight'>
                Premium Digital Tools
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>

            <div className='mt-8 bg-slate-100 dark:bg-slate-900/60 p-1 flex items-center justify-center mx-auto rounded-full w-70 border border-slate-200/50 dark:border-slate-800/40 transition-colors duration-300'>
                <button 
                    onClick={() => tabTgl(true)}
                    className={`rounded-full py-2.5 px-6 text-sm font-bold transition-all duration-200 cursor-pointer w-1/2 flex items-center justify-center gap-1.5 ${tab ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 hover:text-slate-800 dark:hover:text-slate-200'}`}
                >
                    Products
                </button>

                <button 
                    onClick={() => tabTgl(false)}
                    className={`rounded-full py-2.5 px-6 text-sm font-bold transition-all duration-200 cursor-pointer w-1/2 flex items-center justify-center gap-1.5 ${!tab ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 hover:text-slate-800 dark:hover:text-slate-200'}`}
                >
                    <span>Cart</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full font-bold transition-all ${!tab ? 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                        {cartItems.length}
                    </span>
                </button>
            </div>
        </div>
    );
}; 

export default TogglingSection;
