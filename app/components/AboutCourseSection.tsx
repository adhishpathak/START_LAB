import React from 'react';
import EnrollNow from './EnrollNow';
import IconBox from './IconBox'


const AboutCourseSection = () => {
    return (
        <section className="flex w-full items-top justify-center bg-white py-16 px-4 w-95">
            <div className="flex justify-end lg:w-1/2 relative right-16 py-32">
                <div className="relative w-[60%]">
                    <img
                        decoding="async"
                        width="950"
                        height="900"
                        src="images/Internet-Marketing-About-Image.webp"
                        alt="Marketing Course"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-16 py-4 left-0">
                        <IconBox
                            icon={
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 640 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
                                </svg>
                            }
                            title="Customers"
                            badge="↑24%"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <IconBox
                            icon={
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 616 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z" />
                                </svg>
                            }
                            title="Sales"
                            badge="↑32%"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 text-gray-800 mt-8 lg:mt-0" >
                <h6 className="text-h6 font-h6 text-green-600 leading-h6 tracking-h6 mb-8 before:content-['|'] before:mr-2">
                    ABOUT THE COURSE
                </h6>
                <h2 className="text-5xl lg:text-5xl font-bold mb-4">
                    Journey into Marketing Mastery: Unveiling The Marketing Toolkit
                </h2>
                <p className="text-lg mb-6">
                    Welcome to The Marketing Toolkit, your comprehensive guide to mastering modern marketing strategies.
                </p>
                <EnrollNow />
            </div>
        </section>
    );
};

export default AboutCourseSection;
