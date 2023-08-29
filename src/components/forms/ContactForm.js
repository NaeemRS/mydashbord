import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div className=" flex items-center justify-center">
      <div className=" p-8  max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Aman'
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border-b focus:border-b  rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder='Aman'
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border-b focus:border-b  rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder='demo@gmail.com'
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border-b focus:border-b  rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="number"
                placeholder='+1234567890'
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 p-2 border-b focus:border-b  rounded w-full"
                required
              />
            </div>

          </div>
          <div>
            <h5 className='text-black text-sm'>
              Select Subject?
            </h5>
            <div className='flex items-center my-5 gap-3 flex-wrap'>
              <div className='flex items-center gap-2'>
                <input type='radio' />
                <h5 className='text-gray-800 text-xs whitespace-nowrap'>
                General Inquiry
                </h5>
              </div>
              <div className='flex items-center gap-2'>
                <input type='radio' /><h5 className='text-gray-800 text-xs whitespace-nowrap'>
                General Inquiry
                </h5>
              </div>  <div className='flex items-center gap-2'>
                <input type='radio' /><h5 className='text-gray-800 text-xs whitespace-nowrap'>
                General Inquiry
                </h5>
              </div>  <div className='flex items-center gap-2'>
                <input type='radio' /><h5 className='text-gray-800 text-xs whitespace-nowrap'>
                General Inquiry
                </h5>
              </div>
            </div>
          </div>
          <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Message
              </label>
              <input
                type="text"
                placeholder='Write your Message'
                id="Message"
                name="Message"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 p-2 border-b focus:border-b  rounded w-full"
                required
              />
            </div>
          <button
            type="submit"
            className="bg-[#DC2626] text-white px-4 py-2 w-[200px] ml-auto rounded hover:bg-[#DC2626]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
