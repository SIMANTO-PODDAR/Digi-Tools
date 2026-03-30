const TogglingSection = ({ tab, tabTgl, cartItems }) => {
    return (
        <div className='mt-30 text-center max-w-400 mx-auto'>
            <h1 className='text-[60px] font-bold'>Premium Digital Tools</h1>
            <p className="text-black/50">Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.</p>

            <div className='mt-5 bg-amber-100 w-55 p-1  flex items-center justify-center mx-auto rounded-full'>
                <button onClick={() => tabTgl(true)}
                    className={`btn bg-amber-100 rounded-full w-25 font-bold hover:bg-linear-to-r from-purple-900 to-purple-600 hover:text-white ${tab ? 'bg-linear-to-r from-purple-900 to-purple-600 text-white' : ''}`}>Products</button>

                <button onClick={() => tabTgl(false)}
                    className={`btn bg-amber-100 rounded-full w-25 font-bold hover:bg-linear-to-r from-purple-900 to-purple-600 hover:text-white ${tab ? '' : 'bg-linear-to-r from-purple-900 to-purple-600 text-white'}`}>Cart ({cartItems.length})</button>
            </div>
        </div>
    );
}; 

export default TogglingSection;