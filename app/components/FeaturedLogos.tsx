const FeaturedLogos = () => {
    return (
        <section className="py-8 bg-[#1A9C4B]">
            <h1 className='text-center text-white py-4'>Featured in:</h1>
            <div className="container mx-auto flex justify-around items-center">
                <img src="/images/zapier-logo.svg" alt="Zapier" className="w-32 h-32 object-contain" />
                <img src="/images/ebay-logo.png" alt="eBay" className="w-32 h-32 object-contain" />
                <img src="/images/stripe-logo.png" alt="Stripe" className="w-32 h-32 object-contain" />
                <img src="/images/google-logo.png" alt="Google" className="w-32 h-32 object-contain" />
                <img src="/images/docusign-logo.png" alt="DocuSign" className="w-32 h-32 object-contain" />
            </div>
        </section>
    );
};

export default FeaturedLogos;
