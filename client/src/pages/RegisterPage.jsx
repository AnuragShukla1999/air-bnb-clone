import React, { useState } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/api/register', {
                name, email, password,
            });

            alert('Registration successful. Now you can log in');
        } catch (error) {
            alert('Registration failed. Please try again later');
        }
    }

  return (
    <div className="mt-4 grow flex items-center justify-around">
        <div className='mb-64'>
            <h1 className='text-4xl text-center mb-4'>Register</h1>

            <form className='mx-w-md mx-auto' onSubmit={registerUser}>
                <input 
                    placeholder='John Doe'
                    value={name}
                    type="text" 
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='your@email.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className='primary'>Register</button>

                <div className='text-center py-2 text-gray-500'>
                    Already a member? <Link className='underline text-black' to={'/login'}>Login</Link>
                </div>
            </form>
        </div>
    </div>
  );
}

export default RegisterPage