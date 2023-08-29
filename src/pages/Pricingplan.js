import React from 'react'
import Userdetail from '../components/forms/Userdatail';
const Pricingplan = () => {
  const pricingData = [
    {
      type: "START",
      price: "$19",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric"
      ],
      buttonText: "Button",
      buttonColor: "bg-gray-400",
      monthlyPrice: "",
      currency: "",
      discountLabel: "",
      isPopular: false
    },
    {
      type: "PRO",
      price: "$38",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Mixtape chillwave tumeric"
      ],
      buttonText: "Button",
      buttonColor: "bg-indigo-500",
      monthlyPrice: "/mo",
      currency: "$",
      discountLabel: "POPULAR",
      isPopular: true
    },
    {
      type: "BUSINESS",
      price: "$56",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Hexagon neutra unicorn",
        "Vexillologist pitchfork",
        "Mixtape chillwave tumeric"
      ],
      buttonText: "Button",
      buttonColor: "bg-gray-400",
      monthlyPrice: "/mo",
      currency: "$",
      discountLabel: "",
      isPopular: false
    },

  ];

  return (
    <section className="text-gray-600 body-font lg:mt-10 mt-5 overflow-hidden">
      <h1 className="sm:text-2xl text-xl font-bold mb-3 title-font text-gray-900">My Current Plan </h1>

      <Userdetail />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-2xl text-xl font-bold title-font mb-2 text-gray-900">Please select plan for your store </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
          {pricingData.map(item => (
            <div key={item.type} className="w-full" >
              <div className={`h-full p-6 border-2 rounded-lg border-gradient-t-blue from-blue-200 to-blue-400 ${item.isPopular ? 'border-indigo-500 bg-gray-200' : 'border-gray-300'} flex flex-col relative overflow-hidden`}>
                {item.discountLabel && <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{item.discountLabel}</span>}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{item.type}</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center">
                  <span>{item.price}</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">{item.monthlyPrice}</span>

                </h1>
                <p className='text-sm  pb-4 mb-4 border-b border-gray-200 block'>per menber per month</p>

                {item.features.map(feature => (
                  <p key={feature} className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}
                <button className={`flex items-center mt-auto text-white ${item.buttonColor} border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded`}>
                  {/* {item.buttonText} */}
                  Start free 14-day trial
                </button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricingplan;
