import React from 'react';
import Link from 'next/link';

const EnrollNow = () => {
    return (
        <Link
            href="/enroll"
            className="inline-flex items-center px-6 py-3 border border-transparent 
            text-base font-medium rounded-full 
            text-white bg-green-600 hover:bg-[#003d32] 
            hover:text-white transition duration-300 ease-in-out"
        >
            <span className="mr-2">Enroll Now</span>
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l7-7-7-7"
                />
            </svg>
        </Link>
    );
};

export default EnrollNow;