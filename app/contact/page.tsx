import React from 'react';

const Contact: React.FC = () => {
    return (
        <>
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p>We're here to help! Reach out to us through any of the following ways.</p>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Email Us</h2>
                    <p className="mt-2">info@startlab.com</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Call Us</h2>
                    <p className="mt-2">+1 (123) 456-7890</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Visit Us</h2>
                    <p className="mt-2">1234 Innovation Drive, Tech City, TC 56789</p>
                </div>
            </main>
        </>
    );
};

export default Contact;
