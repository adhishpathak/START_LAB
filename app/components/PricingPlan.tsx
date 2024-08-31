import React from 'react';
import EnrollNow from './EnrollNow';
import TickSvgIcon from './TickSvgIcon';

interface PricingPlanProps {
    title: string;
    description: string;
    price: string;
    priceDetails?: string;
    features?: string[];
    imgSrc?: string;
    imgAlt?: string;
    imgClasses?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
    title,
    description,
    price,
    priceDetails,
    features,
    imgSrc,
    imgAlt,
    imgClasses,
}) => {
    return (
        <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={`w-48 h-48 mx-auto absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 ${imgClasses}`}
                    />
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex items-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mr-2">{price}</div>
                    {priceDetails && <p className="text-gray-600">{priceDetails}</p>}
                </div>
                <EnrollNow />
                {features && (
                    <>
                        <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Everything in Basic, and</h5>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700 gap-2">
                                    <TickSvgIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default PricingPlan;
