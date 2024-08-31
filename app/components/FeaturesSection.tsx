export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Mastery into Marketing</h3>
                    <p className="text-gray-600">Comprehensive guides to mastering the art of marketing.</p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Premium Resources</h3>
                    <p className="text-gray-600">Exclusive resources to enhance your marketing skills.</p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Training Materials Included</h3>
                    <p className="text-gray-600">All necessary training materials included with your subscription.</p>
                </div>
            </div>
        </section>
    );
}
