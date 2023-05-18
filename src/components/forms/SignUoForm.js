import React, { useState } from "react";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        role: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or validation logic here
        console.log(formData);
    };

    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="gender" className="block mb-2">
                    Gender
                </label>
                <select
                    id="gender"
                    name="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="role" className="block mb-2">
                    Role
                </label>
                <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button
                type="submit"
                className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
