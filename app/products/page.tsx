import React from 'react';

const Products: React.FC = () => {
    return (
        <>
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Our Products</h1>
                <p>Discover our wide range of products designed to meet your needs.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold">Product 1</h2>
                        <p className="mt-2">This is a short description of Product 1. It is an amazing product with many features.</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold">Product 2</h2>
                        <p className="mt-2">This is a short description of Product 2. It is an innovative product that solves many problems.</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold">Product 3</h2>
                        <p className="mt-2">This is a short description of Product 3. It has received excellent reviews from customers.</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Products;
