import { use } from 'react';
import { BiCartDownload } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";


const Cards = ({ fetchPromise, tab, handleCartItems, cartItems }) => {
    const cards = use(fetchPromise);

    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 ${tab ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    cards.map((card, ind) => (
                        <Card
                            key={card.id || ind}
                            card={card}
                            handleCartItems={handleCartItems}
                            cartItems={cartItems}
                        />
                    ))
                }
            </div>
        </div>
    );
};


const Card = ({ card, handleCartItems, cartItems }) => {
    const cardInCart = cartItems.some(item => item.id === card.id);
    // Determine badge styling based on tag
    const getBadgeStyle = (tag) => {
        const lower = (tag || '').toLowerCase();
        if (lower.includes('new')) {
            return 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-400';
        }
        if (lower.includes('popular')) {
            return 'bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-400';
        }
        return 'bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/40 text-amber-700 dark:text-amber-400';
    };

    return (
        <div className="card glass-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full border border-slate-200/50 dark:border-slate-800/40">
            <div className="p-6 sm:p-8 flex flex-col h-full space-y-6">

                {/* Icon & Badge Header */}
                <div className='flex justify-between items-start'>
                    <div className='p-3 bg-indigo-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center w-14 h-14 transition-colors duration-300'>
                        <img src={card.icon} alt={card.name} className="w-8 h-8 object-contain dark:brightness-110" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${getBadgeStyle(card.tag)}`}>
                        {card.tag}
                    </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2 grow">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                        {card.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {card.description}
                    </p>
                </div>

                {/* Pricing info */}
                <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">$ {card.price}</span>
                    <span className='text-xs font-medium text-slate-400 uppercase tracking-wider'>/{card.period}</span>
                </div>

                {/* Features List */}
                <div className="border-t border-slate-100 dark:border-slate-800/50 pt-6">
                    <ul className="space-y-3">
                        {
                            card.features.map((feature, ind) => (
                                <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm" key={ind}>
                                    <span className="shrink-0 mr-2.5 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                                        <FiCheck size={12} className="stroke-3" />
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Action button */}
                <div className="pt-2">
                    <button
                        onClick={() => handleCartItems(card)}
                        className={`w-full py-3.5 px-6 rounded-full font-bold flex items-center justify-center gap-2 border-none shadow-md transition-all duration-300 cursor-pointer text-sm
                            ${cardInCart ?
                                'bg-linear-to-r from-emerald-600 to-teal-500 text-white shadow-emerald-500/10 cursor-default' :
                                'bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98]'}`}
                    >
                        {cardInCart ? (
                            <>
                                <BiCartDownload size={18} />
                                <span>Added to Cart</span>
                            </>
                        ) : (
                            <span>Buy Now</span>
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cards;
