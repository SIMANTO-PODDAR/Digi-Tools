const Cart = ({ tab, cartItems }) => {
    return (
        <div className={`border border-black/20 rounded-xl p-5 mt-5 mx-auto 
        ${tab ? 'hidden' : ''} `}>

            <h1 className="text-xl font-black">Your Cart</h1>
            <div>
                {
                    cartItems.map((cart, ind) => <Item key={ind} cart={cart} />)
                }
            </div>

        </div>
    );
};


const Item = ({ cart }) => {
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

            <button className="text-red-500 btn">Remove</button>
        </div>

    )

}
export default Cart;