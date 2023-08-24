import React from 'react'

const Home = () => {
    
const pricingPlans = [
    {
      title: 'Basic Plan',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Premium Plan',
      price: '$20/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
    {
        title: 'Basic Plan',
        price: '$10/month',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
      },
      {
        title: 'Premium Plan',
        price: '$20/month',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      },
    // Add more plans as needed
  ];
       return <>
     <div>
      <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Plan</h2>
        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 w-full sm:grid-cols-2 grid-c mb-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-blue-200 p-4 rounded w-full mr-4">
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-700">{plan.price}</p>
              <ul className="mt-2">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Select
              </button>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-center">
          Need a custom plan? <a href="#" className="text-blue-500">Contact us</a>.
        </p>
      </div>
    </div>
    </>
}

export default Home
