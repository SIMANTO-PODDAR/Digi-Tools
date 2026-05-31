import { TbShoppingCartExclamation } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import AIWritingPro from "/src/assets/Images/products/writing.png";
import DesignTemplatesPack from "/src/assets/Images/products/design-tool.png";
import PremiumStockAssets from "/src/assets/Images/products/camera.png";
import AutomationToolkit from "/src/assets/Images/products/operation.png";
import ResumeBuilderPro from "/src/assets/Images/products/portfolio.png";
import SocialMediaContentKit from "/src/assets/Images/products/social-media.png";
import { toast } from "react-toastify";

const localIcons = {
    "AI Writing Pro": AIWritingPro,
    "Design Templates Pack": DesignTemplatesPack,
    "Premium Stock Assets": PremiumStockAssets,
    "Automation Toolkit": AutomationToolkit,
    "Resume Builder Pro": ResumeBuilderPro,
    "Social Media Content Kit": SocialMediaContentKit,
};

const Cart = ({ tab, cartItems, setCartItems }) => {
    const handleCheckout = () => {
        setCartItems([])
        toast.success('Checkout successful! Thank you for your purchase.')
    }

    const handleRemove = (cart) => {
        const nCartItrms = cartItems.filter(item => item.id !== cart.id)
        setCartItems(nCartItrms)
        toast.error(`${cart.name} removed from cart!`)
    }

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 ${tab ? 'hidden' : 'block'}`}>

            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Your Cart</h2>
                {cartItems.length > 0 && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                        {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                    </span>
                )}
            </div>

            {cartItems.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left: Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        {
                            cartItems.map((cart, ind) => (
                                <Item
                                    key={cart.id || ind}
                                    cart={cart}
                                    handleRemove={handleRemove}
                                />
                            ))
                        }
                    </div>

                    {/* Right: Checkout Summary */}
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/40 space-y-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Order Summary</h3>

                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold text-slate-900 dark:text-white">${total}.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes & Fees</span>
                                <span className="font-semibold text-slate-900 dark:text-white">$0.00</span>
                            </div>
                            <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 flex justify-between text-base font-bold text-slate-900 dark:text-white">
                                <span>Total</span>
                                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">${total}.00</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full py-4 px-6 rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 font-bold border-none shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            ) : (
                /* Empty state */
                <div className="glass-card rounded-3xl p-12 sm:p-20 text-center max-w-2xl mx-auto border border-slate-200/40 dark:border-slate-800/30">
                    <div className="mx-auto w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 mb-6">
                        <TbShoppingCartExclamation size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Your Cart is Empty</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                        Looks like you haven't added any premium tools to your cart yet. Explore our products and supercharge your workflow.
                    </p>
                    <button
                        onClick={() => window.location.href = '#products'}
                        className="py-3 px-8 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 font-semibold transition-all shadow-md shadow-indigo-500/15"
                    >
                        Browse Products
                    </button>
                </div>
            )}

        </div>
    );
};


const Item = ({ cart, handleRemove }) => {
    const iconSrc = localIcons[cart.name] || cart.icon;

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 hover:border-slate-200 dark:hover:border-slate-800/80 rounded-2xl transition-all duration-200 group">
            <div className="flex items-center gap-4">
                <div className='p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center w-12 h-12'>
                    <img src={iconSrc} alt={cart.name} className="w-8 h-8 object-contain dark:brightness-110" />
                </div>
                <div>
                    <h4 className='font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>{cart.name}</h4>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">${cart.price} / {cart.period}</p>
                </div>
            </div>

            <button
                onClick={() => handleRemove(cart)}
                className="btn btn-ghost btn-circle text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                aria-label="Remove item"
            >
                <FiTrash2 size={18} />
            </button>
        </div>
    );
};

export default Cart;
