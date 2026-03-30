import { FaRegDotCircle } from 'react-icons/fa';
import BannerImg from '../../Images/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row justify-between md:mt-22 p-5 max-w-400 mx-auto'>

                <div className='mt-5 md:mt-22'>
                    <div className='btn flex items-center w-57 rounded-full gap-3 p-2 bg-purple-100 text-purple-600 text-[12px]'> <FaRegDotCircle /> New: AI-Powered Tools Available</div>
                    <h1 className='text-[30px] sm:text-[40px] md:text-[80px] font-bold'>Supercharge Your <br />
                        Digital Workflow</h1>

                    <p className="text-black/60">Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>

                    <div className='mt-3 flex flex-col sm:flex-row gap-3'>
                        <a className="btn rounded-full text-white hover:text-violet-600 bg-linear-to-r from-purple-900 hover:from-white to-purple-600 hover:to-white border-violet-600  font-bold w-38">Explore Products</a>
                        <a className="btn rounded-full text-violet-600 border border-violet-600 font-bold hover:text-white hover:bg-linear-to-r from-purple-900 to-purple-600  w-38">
                            <CiPlay1 />
                            Watch Demo</a>
                    </div>

                </div>

                <div className='opacity-70 mt-3 scale-80 md:scale-100 md:mt-0 '>
                    <img src={BannerImg} alt="BannerImg" />
                </div>


            </div>

            <div className="w-full bg-linear-to-r from-purple-900 to-purple-600 py-20 text-white mt-15">
                <div className="flex justify-around items-center text-center max-w-400 mx-auto">

                    <div>
                        <h2 className="text-4xl font-bold">50K+</h2>
                        <p className="mt-2 text-sm">Active Users</p>
                    </div>

                    <div className="w-0.5 h-12 bg-white opacity-50"></div>

                    <div>
                        <h2 className="text-4xl font-bold">200+</h2>
                        <p className="mt-2 text-sm">Premium Tools</p>
                    </div>

                    <div className="w-0.5 h-12 bg-white opacity-50"></div>

                    <div>
                        <h2 className="text-4xl font-bold">4.9</h2>
                        <p className="mt-2 text-sm">Rating</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Banner;