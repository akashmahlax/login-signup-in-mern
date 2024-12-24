// OUR IMPOERTS
import  { useState } from 'react'; // TO TRACK CHANGES IN EMAIL AND PASSWORD
import axios from 'axios';          //TO SEND REQUESTS ON SERVER OR BACKEND 
import { useNavigate } from 'react-router-dom';  //TO SEND USER HOME PAGE AFTER LOGIN


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      console.log(response.data.message);
      navigate('/home');
    } catch (error) {
      console.log('Error logging in', error.response.data.message);
    }
  };

  return (
    <div >
      <h1 className='text-bold text-3xl justify-self-center p-4 m-2 border-zinc-500 '>Login</h1>
      <input 
      className = 'input block w-1/3  justify-self-center'
      type="email" placeholder="Email" 
      onChange={e => setEmail(e.target.value)} />
      <input 
      className='input block w-1/3  justify-self-center' 
      type="password" 
      placeholder="Password"
       onChange={e => setPassword(e.target.value)} />
      <div className=' justify-self-center' >
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
