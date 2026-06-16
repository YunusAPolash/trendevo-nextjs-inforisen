import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Buy Twitter Followers - Grow Your Audience | TrendEvo',
  description: 'Build your authority on X (Twitter) with real, high-quality followers. Fast delivery and 24/7 support to help you scale your profile.',
};

const pricingPackages = [
  { amount: 100, price: '$4.99', popular: false },
  { amount: 500, price: '$19.99', popular: true },
  { amount: 1000, price: '$34.99', popular: false },
  { amount: 5000, price: '$149.99', popular: false },
];

export default function TwitterFollowersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl text-blue-600">
            Buy Twitter Followers
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Establish your authority and grow your brand with real Twitter followers.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.amount}
              className={`relative bg-white border rounded-2xl shadow-sm p-8 flex flex-col ${
                pkg.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold self-center">
                  Best Value
                </span>
              )}
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">{pkg.amount} Followers</h3>
                <p className="mt-4 text-4xl font-extrabold text-gray-900">{pkg.price}</p>
              </div>
              <ul className="mt-6 space-y-4 flex-grow">
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Non-Drop Guarantee
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gradual Delivery
                </li>
              </ul>
              <button
                className="mt-8 block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Get Followers
              </button>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-24 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Enhance Your Profile Authority</h2>
            <p className="text-gray-600">
              A high follower count is the quickest way to establish credibility. When potential followers visit your
              profile, the number of people following you is the first thing they notice. Start your growth journey today.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">24/7 Premium Support</h2>
            <p className="text-gray-600">
              Our team is available around the clock to ensure your delivery is smooth and any questions are answered.
              We pride ourselves on providing the most reliable service in the industry.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}