import UserImg from '../../Images/user.png';
import PackageImg from '../../Images/package.png';
import RocketImg from '../../Images/rocket.png';

const Steps = () => {
    return (
        <div className="mt-30 text-center max-w-400 mx-auto">
            <h1 className='text-[60px] font-bold'>Get Started in 3 Steps</h1>
            <p className="text-black/50">Start using premium digital tools in minutes, not hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-auto">

                <div className="card w-96 bg-base-100 shadow-sm p-3 pb-5 group">
                    <div className='flex justify-end'>
                        <button className='btn w-10 rounded-full text-white bg-linear-to-r from-purple-900 to-purple-600 font-bold'>01</button>
                    </div>
                    <div className="card-body">
                        <div className='flex justify-center '>
                            <div className='p-4 bg-pink-200 w-20 rounded-full '>
                                <img className='transform transition-transform duration-500 ease-in-out group-hover:scale-125' src={UserImg} alt="UserImg" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <h2 className="text-3xl font-bold">Create Account</h2>
                        </div>
                        <p className="text-black/50">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-sm p-3 pb-5 group">
                    <div className='flex justify-end'>
                        <button className='btn w-10 rounded-full text-white bg-linear-to-r from-purple-900 to-purple-600 font-bold'>02</button>
                    </div>
                    <div className="card-body">
                        <div className='flex justify-center '>
                            <div className='p-4 bg-pink-200 w-20 rounded-full '>
                                <img className='transform transition-transform duration-500 ease-in-out group-hover:scale-125' src={PackageImg} alt="PackageImg" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <h2 className="text-3xl font-bold">Choose Products</h2>
                        </div>
                        <p  className="text-black/50">Browse our catalog and select the tools
                            that fit your needs.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-sm group p-3 pb-5">
                    <div className='flex justify-end'>
                        <button className='btn w-10 rounded-full text-white bg-linear-to-r from-purple-900 to-purple-600 font-bold'>03</button>
                    </div>
                    <div className="card-body">
                        <div className='flex justify-center '>
                            <div className='p-4 bg-pink-200 w-20 rounded-full '>
                                <img className='transform transition-transform duration-500 ease-in-out group-hover:scale-125' src={RocketImg} alt="RocketImg" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <h2 className="text-3xl font-bold">Start Creating</h2>
                        </div>
                        <p className="text-black/50">Download and start using your premium
                            tools immediately.</p>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Steps;