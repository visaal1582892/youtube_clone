import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthType } from '../utils/redux/slices/showAuthSlice';
import { login } from '../utils/redux/slices/authSlice';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toggleAuthModal } from '../utils/redux/slices/showAuthSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (loginData) => {
    const userToken = await loginData.token;
    localStorage.setItem("userToken",userToken);
    const tokenDecodeRes=await jwtDecode(userToken);
    console.log(tokenDecodeRes);
    dispatch(login(tokenDecodeRes.userId));
    setForm({ email: '', password: '' });
    dispatch(toggleAuthModal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/users/login', {
        email: form.email,
        password: form.password,
      });

      handleLogin(res.data);
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="input"
        required
      />
      <button type="submit" className="btn-primary">Login</button>
      <p className="text-sm">
        Don't have an account?{' '}
        <span
          onClick={() => dispatch(setAuthType('register'))}
          className="text-red-600 cursor-pointer"
        >
          Register
        </span>
      </p>
    </form>
  );
};

export default Login;
