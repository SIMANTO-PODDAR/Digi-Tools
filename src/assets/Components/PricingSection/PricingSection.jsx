const PricingSection = () => {
    return (
        <div className="max-w-400 mx-auto">
            <div className='mt-35 text-center'>
                <h1 className='text-[60px] font-bold'>Simple, Transparent Pricing</h1>
                <p className="text-black/50">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 mx-auto">

                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div >
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className="text-black/50">Perfect for getting started</p>
                        </div>
                        <span className="text-xl"><span className="text-2xl font-bold">$0</span><span className="text-sm text-black/50">/Month</span></span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >1 project per month</span>
                            </li>
                            <li className="opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" ></span>
                            </li>
                            <li className="opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" ></span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-purple-900 to-purple-600">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-sm bg-linear-to-r from-purple-900 to-purple-600 text-white group">
                    <div className="card-body relative">
                        <span className="badge badge-sm badge-warning absolute -top-2 ml-30 transform transition-transform duration-500 ease-in-out group-hover:scale-125">Most Popular</span>
                        <div >
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>
                        <span className="text-xl"><span className="text-2xl font-bold">$29</span><span className="text-sm ">/Month</span></span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span  >Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span  >Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span  >Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span  >Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span  >Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span  >Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full bg-white text-purple-900">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div >
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className="text-black/50">For teams and businesses</p>
                        </div>
                        <span className="text-xl"><span className="text-2xl font-bold">$99</span><span className="text-sm text-black/50">/Month</span></span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-black/50" >Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-purple-900 to-purple-600">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PricingSection;