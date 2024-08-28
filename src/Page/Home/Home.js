import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); 
            return;
        }
        try {
            const decoded = jwtDecode(token); 
            const userId = decoded.id; 
            const fetchUserData = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/users/${userId}`);
                    setUserData(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
            fetchUserData();
        } catch (error) {
            console.error('Error decoding token:', error);
            navigate('/login'); 
        }
    }, [navigate]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <>            
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="text-center">
                    <img className="rounded w-36 h-36 mx-auto" src={userData.img} alt="User Avatar" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userData.FL_name}</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{userData.Nickname}</h5>
                    <p>Birthday: {userData.Birthday}</p>
                    <p>Province: {userData.Province}</p>
                    <p>Phone: {userData.Phone}</p>
                    <p>Facebook: {userData.Facebook}</p>
                    <p>ID Line: {userData.ID_Line}</p>
                    <p>Email: {userData.Email}</p>
                </div>
            </div>

        </>
    );
}

export default Home;
