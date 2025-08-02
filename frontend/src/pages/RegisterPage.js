import { useState } from 'react';
import axios from 'axios';
const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleRegister = async () => {
    await axios.post('http://localhost:5000/api/auth/register', form);
    alert('Registered successfully');
  };
  return (
    <div>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
export default RegisterPage;