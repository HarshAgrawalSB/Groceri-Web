import React, { useState } from 'react'
import { handleUserSubmit } from '../services/AuthService';

const SignUp = ({ formName, setName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const result = await handleUserSubmit(formData)


    };

    return (
        <div className="flex justify-center items-center ">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="contact"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Contact Number
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your contact number"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign Up
                    </button>
                </div>
                {formName && <div>
                    <p>Already have an account, <span className='text-emerald-600' onClick={() => { setName('signin') }}>Sign In</span></p>
                </div>}

            </form>
        </div>
    );
}

export default SignUp