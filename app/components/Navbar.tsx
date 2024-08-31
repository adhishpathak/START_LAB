import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <header className="bg-white text-gray-900 shadow-md w-full md:w-12/12 lg:w-11/12 mx-auto flex justify-center items-center h-20 mt-8 rounded-lg border border-grey">
            <nav className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/" className="flex items-center text-black-600">
                        <img
                            className="h-6 w-auto mr-2" // Adjust height and width as needed
                            src="images/logo.jpg"
                            alt="Start Lab"
                        />
                        STRATLAB
                    </Link>

                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/service" className="hover:text-gray-600">Service
                    </Link>
                    <Link href="/why-us" className="hover:text-gray-600">Why Us
                    </Link>
                    <Link href="/testimonial" className="hover:text-gray-600">Testimonial
                    </Link>
                    <Link href="/faq" className="hover:text-gray-600">FAQ
                    </Link>
                    <Link href="/about" className="hover:text-gray-600">About
                    </Link>
                </div>

                {/* Login/Signup Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link
                        href="/login"
                        className="text-gray-900 border border-gray-900 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-900 hover:text-white active:bg-gray-800">
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-700 active:bg-green-800">
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden flex items-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
        </header >
    );
};

export default Navbar;
