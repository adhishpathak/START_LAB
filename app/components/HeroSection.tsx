import React from 'react';
import TickSvgIcon from './TickSvgIcon';
import EnrollNow from './EnrollNow';

const HeroSection = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start relative px-10">
                <div className="flex-1 h-full md:mr-8 order-2 md:order-1 flex flex-col justify-between">
                    <div>
                        <h6 className="text-h6 font-h6 text-green-600 leading-h6 tracking-h6 mb-8 before:content-['|'] before:mr-2">
                            THE MARKETING TOOLKIT
                        </h6>
                        <h1 className="text-[65px] font-bold text-gray-900 mb-4 tracking-tight">Mastering Proven Strategies That Drive Real Results</h1>
                        <p className="text-gray-600 mb-8">Unleash the power of strategic marketing with our comprehensive course, designed to empower you with the skills
                            and knowledge necessary to navigate the dynamic landscape of modern business.</p>
                        <EnrollNow />
                    </div>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            Money back guarantee
                        </li>
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            Scalable growth tools
                        </li>
                        <li className="flex items-center">
                            <TickSvgIcon color="green" size="6" additionalClasses="mr-2" />
                            Access to members-only community
                        </li>
                    </ul>
                </div>
                <div className="flex-1 h-full order-3 md:order-2 relative flex justify-center">
                    {/* Image with higher z-index */}
                    <div className="relative inline-block z-10" style={{ margin: '58px 0 0 -5px' }}>
                        <img src="/images/marketing-toolkit.png" alt="The Marketing Toolkit" className="w-full" />
                    </div>
                    {/* Top Box */}
                    <div className="absolute left-[62%] transform -translate-x-1/2 w-[120px] h-[120px] bg-green-600 rounded-md z-0"></div>
                    {/* Left Box */}
                    <div className="absolute top-[60%] left-[14%] w-[120px] h-[120px] bg-green-600 rounded-md z-0"></div>
                    {/* Right Box */}
                    <div className="absolute top-[38%] right-[4%] w-[120px] h-[120px] bg-green-600 rounded-md z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
