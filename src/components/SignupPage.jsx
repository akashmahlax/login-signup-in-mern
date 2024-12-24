import  { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import NewLogin from './NewLogin';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/signup', { email, password });
      alert(response.data.message);
       navigate("/login")
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <>
      <h1 className='text-bold text-3xl justify-self-center p-4 m-2 border-zinc-500 '>Sign Up</h1>
      <input
      className='input block w-1/3  justify-self-center'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
       className='input block w-1/3 justify-self-center'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
       className='input block  w-1/3 justify-self-center '
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
     <div className=' justify-self-center' >
     <button className='' onClick={handleSignup}>Sign Up</button>
     <a href='/login' className='text-green-500 p-2 m-2 border border-green-500 rounded-xl'>If already have Account</a>
     </div>
    
    </>
  );
}

export default SignupPage;
