import React from 'react';
import PricingPlan from './PricingPlan';


const PricingSection = () => {
    const monthlyFeatures = [
        "Money back guarantee",
        "Satisfaction Guaranteed",
        "Or get your money back within 30 days",
    ];

    const oneTimeFeatures = [
        "Scalable growth tools",
        "Premium support",
        "Customizable options",
    ];

    return (
        <section id="pricing-3" className="bg-white py-8">
            <div className="container mx-auto px-6">
                <div className="text-left mb-12">
                    <h6 className="text-h6 font-h6 text-green-600 leading-h6 tracking-h6 mb-8 before:content-['|'] before:mr-2">
                        Pricing
                    </h6>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Choose the pricing that works best for you
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <PricingPlan
                        title="Monthly Subscription"
                        description="Fuel your product workflow with more advanced research features"
                        price="$49"
                        priceDetails="/ Month"
                        features={monthlyFeatures}
                    />
                    <PricingPlan
                        title="One-Time Payment"
                        description="Scale product research and learning across your company"
                        price="$299"
                        priceDetails="(Save 20%)"
                        features={oneTimeFeatures}
                        imgSrc="images/Internet-Marketing-Pricing-Image.webp"
                        imgAlt="Pricing"
                        imgClasses=""
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
