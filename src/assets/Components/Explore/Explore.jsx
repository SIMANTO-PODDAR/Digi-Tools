const Explore = () => {
    return (
        <div className="md:mt-40 bg-linear-to-r from-purple-900 to-purple-600 py-5">
            <div className='flex justify-center p-5 md:p-15 max-w-400 mx-auto'>
                <div>
                    <h1 className='text-[30px] sm:text-[40px] md:text-[50px] font-bold text-white'>Ready to Transform Your Workflow?</h1>

                    <p className="text-white/70  text-center">Join thousands of professionals who are already using Digitools to work
                        smarter. <br />
                        Start your free trial today.
                    </p>

                    <div className='mt-3 flex gap-3 justify-center'>

                        <button className="btn rounded-full text-violet-600 border border-violet-600 font-bold hover:text-white hover:bg-linear-to-r from-purple-900 to-purple-600">
                            Explore Products </button>

                        <button className="btn rounded-full text-white hover:text-violet-600 bg-linear-to-r from-purple-900 hover:from-white to-purple-600 hover:to-white border-violet-600  font-bold">View Pricing</button>

                    </div>
                    <p className="text-white/70 text-center mt-3">14-day free trial • No credit card required • Cancel anytime</p>

                </div>
            </div>
        </div>
    );
};

export default Explore;