import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonial">
            <div className="pb-20 bg-gray-50">
                <span className="justify-center flex text-center text-2xl font-semibold text-gray-800 mb-8 left-32">
                    What they say about us
                </span>

                <div className="justify-center flex  items-center md:flex-row md:items-start gap-8">
                    <div className="bg-gray-100 p-6 rounded-md shadow-lg max-w-sm">
                        <div className="flex items-center justify-center space-x-1 mb-4">
                            {/* Star icons */}
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                    key={index}
                                    aria-hidden="true"
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                </svg>
                            ))}
                            {/* Rating */}
                            <span className="text-gray-700 font-medium">5.0</span>
                        </div>

                        <p className="text-gray-600 text-center mb-4">
                            I never realized the potential of landing pages until I took this course.
                            It completely transformed my approach to marketing.
                        </p>

                        <h5 className="text-lg font-semibold text-center text-gray-900">
                            Luke John, London
                        </h5>
                    </div>

                    {/* Repeat for other two testimonials */}
                    <div className="bg-gray-100 p-6 rounded-md shadow-lg max-w-sm">
                        <div className="flex items-center justify-center space-x-1 mb-4">
                            {/* Star icons */}
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                    key={index}
                                    aria-hidden="true"
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                </svg>
                            ))}
                            {/* Rating */}
                            <span className="text-gray-700 font-medium">5.0</span>
                        </div>

                        <p className="text-gray-600 text-center mb-4">
                            I never realized the potential of landing pages until I took this course.
                            It completely transformed my approach to marketing.
                        </p>

                        <h5 className="text-lg font-semibold text-center text-gray-900">
                            Luke John, London
                        </h5>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md shadow-lg max-w-sm">
                        <div className="flex items-center justify-center space-x-1 mb-4">
                            {/* Star icons */}
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                    key={index}
                                    aria-hidden="true"
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                </svg>
                            ))}
                            {/* Rating */}
                            <span className="text-gray-700 font-medium">5.0</span>
                        </div>

                        <p className="text-gray-600 text-center mb-4">
                            I never realized the potential of landing pages until I took this course.
                            It completely transformed my approach to marketing.
                        </p>

                        <h5 className="text-lg font-semibold text-center text-gray-900">
                            Luke John, London
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
