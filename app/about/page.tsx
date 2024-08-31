import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p>We are a leading company in our industry, committed to providing top-notch products and services to our customers.</p>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="mt-2">Our mission is to innovate and deliver the best possible solutions to meet our customers' needs.</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Our Team</h2>
                    <p className="mt-2">Our team consists of experienced professionals dedicated to excellence in everything we do.</p>
                </div>
            </main>
        </>
    );
};

export default About;
