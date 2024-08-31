import React from 'react';

const MarketingSection = () => {
    return (
        <section className="bg-[#1A9C4B] py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <div className="flex items-center justify-center h-full">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                Ready to supercharge your marketing skills?
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <div className="flex flex-col items-center justify-center h-full">
                            <p className="text-base text-white py-8">
                                Our open, positive, and proactive approach helps us find ways to align your work.
                            </p>
                            <a
                                href="/course-registration-form"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-[#1A9C4B] bg-white hover:bg-[#003d32] hover:text-white transition duration-300 ease-in-out"
                            >
                                <span className="mr-2">Get started now</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 19l7-7-7-7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingSection;
