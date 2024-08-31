import React from 'react';

const CourseSummary = () => {
    return (
        <section className="bg-gray-50 p-8 flex justify-center items-center"
            style={{ minHeight: 'calc(100vh - 300px)' }}
        >
            <div className="max-w-6xl w-full">
                {/* Course Summary Header */}
                <div className="mb-8">
                    <h6 className="text-h6 font-h6 text-green-600 leading-h6 tracking-h6 mb-8 before:content-['|'] before:mr-2">
                        COURSE SUMMARY
                    </h6>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Navigating The Marketing Landscape: <br /> Your Roadmap to Success
                    </h1>
                </div>

                <div className="flex">
                    {/* First Section: Covers 20% width */}
                    <div className="flex flex-col" style={{ width: '5%' }}>
                        <div className="flex flex-col bg-green-800 h-full">
                            <div className="text-white flex flex-col 
                            items-center justify-between rounded-t-lg 
                            h-full py-4">
                                <h3 className="text-xl font-bold">01</h3>
                                <p className="text-xl mt-2"
                                    style={{
                                        writingMode: 'vertical-lr',
                                        transform: 'rotate(180deg)',
                                    }}>
                                    Fundamentals of Marketing
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Section: Covers 40% width */}
                    <div className="flex flex-col" style={{ width: '80%' }}>
                        <div className="bg-green-800 text-white p-8 rounded-r-lg h-full flex">
                            {/* Text Content: Takes 50% width */}
                            <div className="flex-1 flex flex-col justify-between">
                                <h3 className="text-3xl font-normal">Fundamentals of Marketing</h3>
                                <p className="mt-4 text-sm">
                                    Delve into the foundational pillars of marketing, where you’ll explore the core principles that underpin successful marketing strategies.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-green-600 
                                        py-2 px-6 
                                        rounded-full 
                                        text-white 
                                        hover:bg-black 
                                        hover:text-white">
                                        Next &gt;
                                    </button>
                                </div>
                            </div>

                            {/* Image Section: Takes 50% width */}
                            <div className="flex-1 flex items-center">
                                <img
                                    src="/images/marketing.png"
                                    alt="Marketing"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Third Section: Covers 20% width */}
                    <div className="flex flex-col ml-4" style={{ width: '5%' }}>
                        <div className="bg-green-100 p-6 text-center text-green-800 h-full rounded-b-lg flex flex-col items-center justify-between rounded-t-lg h-full">
                            <p className="text-xl font-semibold">02</p>
                            <p
                                className="mt-2"
                                style={{
                                    writingMode: 'vertical-lr',
                                    transform: 'rotate(180deg)',
                                }}
                            >
                                Digital Marketing Essentials
                            </p>
                        </div>
                    </div>

                    {/* Fourth Section: Covers 20% width */}
                    <div className="flex flex-col mr-4 ml-4" style={{ width: '5%' }}>
                        <div className="bg-green-100 p-6 text-center text-green-800 h-full rounded-b-lg flex flex-col items-center justify-between rounded-t-lg h-full">
                            <p className="text-xl font-semibold">03</p>
                            <p
                                className="mt-2"
                                style={{
                                    writingMode: 'vertical-lr',
                                    transform: 'rotate(180deg)',
                                }}
                            >
                                Data Analytics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSummary;
