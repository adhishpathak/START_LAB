import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white py-8">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                {/* First Section: Site Details and Social Links */}
                <div className="flex flex-col justify-between w-full max-w-md">
                    <p className="mb-8 text-base leading-relaxed">
                        We make onboarding new employees ridiculously easy. On day one, they’re ready to go. And retaining them is easier.
                    </p>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-400">Follow us on:</span>
                        <Link href="#" className="hover:text-gray-400"><FaLinkedinIn /></Link>
                        <Link href="#" className="hover:text-gray-400"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-gray-400"><FaYoutube /></Link>
                        <Link href="#" className="hover:text-gray-400"><FaFacebookF /></Link>
                    </div>
                </div>

                {/* Second Section: Links */}
                <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="hover:text-gray-400">Home</Link>
                        <Link href="#" className="hover:text-gray-400">Why Us</Link>
                        <Link href="#" className="hover:text-gray-400">Deals</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Link href="#" className="hover:text-gray-400">Service</Link>
                        <Link href="#" className="hover:text-gray-400">Case Studies</Link>
                        <Link href="#" className="hover:text-gray-400">Plan</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Link href="#" className="hover:text-gray-400">Testimonial</Link>
                        <Link href="#" className="hover:text-gray-400">About</Link>
                        <Link href="#" className="hover:text-gray-400">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
