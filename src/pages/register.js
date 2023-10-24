import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Registration data:', formData);
        navigate('/login');
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-2 border rounded"
                />
                <button type="submit" 
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;