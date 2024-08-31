import React from 'react';
import TickSvgIcon from './TickSvgIcon';

const WhatYouLearn = () => {
    return (
        <section className="bg-white text-black py-12 px-12 p-8 flex justify-center items-center"
            style={{ minHeight: 'calc(100vh - 300px)' }}>
            <div className="flex flex-wrap lg:flex-nowrap">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="mb-6">
                        <h6 className="text-h6 font-h6 text-green-600 leading-h6 tracking-h6 mb-8 before:content-['|'] before:mr-2">
                            WHAT YOU"LL LEARN</h6>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold leading-tight">Empower Your Skills: Unveiling the Proficiencies You'll Master</h2>
                    </div>
                    <div className="mb-6">
                        <p>By the end of this course, you’ll be equipped to:</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-4">
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            <span>Develop a comprehensive marketing strategy</span>
                        </li>
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            <span>Utilize various digital marketing channels effectively</span>
                        </li>
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            <span>Analyze and interpret UK-specific marketing data for informed decisions</span>
                        </li>
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            <span>Integrate marketing technology and tools</span>
                        </li>
                    </ul>
                </div>
                {/* Image Content */}
                <div className="w-full lg:w-1/2 h-[450px]">
                    <img
                        src="/images/Internet-Marketing-What-Image.webp"
                        alt="Marketing Visual"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhatYouLearn;
