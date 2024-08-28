// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        Nickname: '',
        img: '',
        FL_name: '',
        Province: '',
        Phone: '',
        Birthday: '',
        Facebook: '',
        ID_Line: '',
        Email: '',
        Password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', formData)
            .then(response => {
                console.log(response.data);
                alert('Form submitted successfully!');
                navigate('/');  // Navigate to login page after successful submission
            })
            .catch(error => {
                if (error.response) {
                    console.error('Server responded with an error:', error.response.data);
                    alert('Server responded with an error. Please try again.');
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    alert('No response received from server. Please check your network connection.');
                } else {
                    console.error('Error setting up the request:', error.message);
                    alert('Error setting up the request. Please try again later.');
                }
            });
    };

    return (
        <div className="register-page" style={{ width: '500px', marginLeft: '550px', marginTop: '30px' }}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="Nickname" className="block mb-2 text-sm font-medium dark:text-white">Nick name</label>
                        <input type="text" id="Nickname" value={formData.Nickname} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="img" className="block mb-2 text-sm font-medium dark:text-white">Img</label>
                        <input type="text" id="img" value={formData.img} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Url" required />
                    </div>
                    <div>
                        <label htmlFor="FL_name" className="block mb-2 text-sm font-medium dark:text-white">First name / Last name</label>
                        <input type="text" id="FL_name" value={formData.FL_name} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John Red" required />
                    </div>
                    <div>
                        <label htmlFor="Province" className="block mb-2 text-sm font-medium dark:text-white">Province</label>
                        <input type="text" id="Province" value={formData.Province} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Flowbite" required />
                    </div>
                    <div>
                        <label htmlFor="Phone" className="block mb-2 text-sm font-medium dark:text-white">Phone number</label>
                        <input type="tel" id="Phone" value={formData.Phone} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="12345678" required />
                    </div>
                    <div>
                        <label htmlFor="Birthday" className="block mb-2 text-sm font-medium dark:text-white">Birthday</label>
                        <input type="date" id="Birthday" value={formData.Birthday} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required />
                    </div>
                    <div>
                        <label htmlFor="Facebook" className="block mb-2 text-sm font-medium dark:text-white">Facebook</label>
                        <input type="text" id="Facebook" value={formData.Facebook} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="ID_Line" className="block mb-2 text-sm font-medium dark:text-white">Line</label>
                        <input type="text" id="ID_Line" value={formData.ID_Line} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="id" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="Email" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
                    <input type="email" id="Email" value={formData.Email} onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="john.doe@company.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="Password" className="block mb-2 text-sm font-medium dark:text-white">Password</label>
                    <input type="password" id="Password" value={formData.Password} onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="•••••••••" required />
                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Submit</button>
            </form>
        </div>
    );
}

export default Register;
