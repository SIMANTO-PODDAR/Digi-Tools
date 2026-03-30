import { use } from 'react';
const Cards = ({ fetchPromise, tab, handleCartItems, cartItems }) => {
    const cards = use(fetchPromise);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 max-w-400 mx-auto 
        ${tab ? '' : 'hidden'} `}>
            {
                cards.map((card, ind) => < Card key={ind} card={card} handleCartItems={handleCartItems}
                    cartItems={cartItems} />)
            }

        </div>
    );
};


const Card = ({ card, handleCartItems, cartItems }) => {

    const cardInCard = cartItems.includes(card);
    return (
        <div className="card w-96 bg-base-100 shadow-sm mt-3 group">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='p-2 bg-amber-100 rounded-full'>
                        <img src={card.icon} alt={card.tag} />
                    </div>
                    <span className={`badge badge-sm badge-warning
                        ${card.tagType == 'new' ? ' text-green-900 bg-green-200 border-0' : ''}
                        ${card.tagType == 'popular' ? ' text-purple-900 bg-purple-100 border-0' : ''}
                        
                        `}>{card.tag}</span>
                </div>

                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{card.name}</h2>
                </div>
                <p className="text-black/60">{card.description}</p>
                <span className="text-xl">$ {card.price} <span className='text-gray-500'>/{card.period}</span></span>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        card.features.map((feature, ind) =>
                            <li className="text-black/60" key={ind}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>)
                    }

                </ul>

                <div className="mt-6">
                    <button onClick={() => handleCartItems(card)}
                        className={`btn rounded-full w-full font-bold  text-white transform transition-transform duration-500 ease-in-out
                        ${cardInCard ?
                                'bg-linear-to-r from-green-900 to-green-400' :
                                'bg-linear-to-r from-purple-900 to-purple-600 group-hover:scale-110'}`}>

                        {cardInCard ? 'Added to Cart!' : 'Buy Now'}</button>
                </div>
            </div>
        </div>
    )

}
export default Cards;