import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                Email: Email,
                Password: Password
            };
            console.log('Sending data:', data); // ตรวจสอบข้อมูลที่ส่งไป
            const response = await axios.post('http://localhost:5000/login', data);
            const token = response.data.token;
            localStorage.setItem('token', token); // เก็บ token ใน localStorage
            console.log('Login successful. Token:', token);

            if (token) {
                navigate('/home', { state: { token } }); // ส่ง token ไปที่หน้า /home
            } else {
                alert('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                if (error.response.status === 401) {
                    alert('Invalid email or password.');
                } else {
                    alert('An error occurred. Please try again.');
                }
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl"
                        style={{ marginTop:'-100px' }}>Login</h1>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <form className="max-w-sm mx-auto" style={{ marginTop: '10px', width:'250px' }} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email" required 
                                />
                            </div>
                            <div className="mb-6">
                                <input 
                                    type="password" 
                                    id="password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="•••••••••" required 
                                />
                            </div>
                            <div className="flex items-start mb-6">
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-500">Register</Link>
                                </label>
                            </div>
                            <button 
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                                dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
    );
}

export default Login;

