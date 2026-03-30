import { TbShoppingCartExclamation } from "react-icons/tb";
import { toast } from "react-toastify";

const Cart = ({ tab, cartItems, setCartItems }) => {
    const handleCheckout = () => {
        setCartItems([])
        toast.success('Checkout successful!')
    }

    const handleRemove = (cart) => {
        const nCartItrms = cartItems.filter(item => item.id != cart.id)
        setCartItems(nCartItrms)
        toast.error(`${cart.name} Removed from cart!`)
    }
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={`border border-black/20 rounded-xl p-5 mt-5 mx-auto 
        ${tab ? 'hidden' : ''} `}>

            <h1 className="text-xl font-black">Your Cart</h1>

            <div className={`${cartItems.length > 0 ? '' : 'hidden'}`}>
                <div>
                    {
                        cartItems.map((cart, ind) => <Item key={ind} cart={cart} handleRemove={handleRemove} />)
                    }
                </div>

                <div>
                    <div className="flex justify-between items-center py-5">
                        <h1>Total:</h1>
                        <h1 className="font-bold text-2xl">$ {total}</h1>
                    </div>
                    <button onClick={handleCheckout} className="btn w-full rounded-full text-white bg-linear-to-r from-purple-900 to-purple-600 font-bold">Proceed to Checkout</button>
                </div>
            </div>

            <div className={`flex justify-center ${cartItems.length > 0 ? 'hidden' : ''}`}>
                <div className="text-gray-500">
                    <div className="text-9xl flex justify-center"><TbShoppingCartExclamation /></div>
                    <h1 className="font-bold text-4xl text-gray-600">Your Cart is Empty!</h1>
                </div>
            </div>

        </div>
    );
};


const Item = ({ cart, handleRemove }) => {
    return (

        <div className="flex justify-between p-3 mt-3 bg-gray-200 rounded-2xl">
            <div className="flex justify-between">
                <div className='p-2 bg-white rounded-full'>
                    <img src={cart.icon} alt={cart.name} />
                </div>
                <div className='ml-3'>
                    <h1 className='font-black'>{cart.name}</h1>
                    <p>$ {cart.price} </p>
                </div>
            </div>

            <button onClick={() => { handleRemove(cart) }} className="text-red-500 btn">Remove</button>
        </div>

    )

}
export default Cart;