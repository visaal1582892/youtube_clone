// src/components/Register.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthType,toggleAuthModal } from '../utils/redux/slices/showAuthSlice';
import axios from 'axios';

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('username', form.username);
    formData.append('email', form.email);
    formData.append('password', form.password);
    if (avatarFile) formData.append('avatar', avatarFile);

    try {
      const response = await axios.post('http://localhost:5000/users/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Registered:', response.data);
      // Redirect or close modal
    } catch (err) {
      console.error('Register Error:', err);
      return;
    }

    // emptying all the fields
    setForm({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // Closing register modal
    dispatch(toggleAuthModal());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Register</h2>

      {/* Avatar upload block */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
          {avatarPreview ? (
            <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
          ) : (
            <span className="w-full h-full flex items-center justify-center text-gray-500 text-sm">Avatar</span>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleAvatarChange} className="text-sm" />
      </div>

      <input
        type="text"
        name="username"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Gmail"
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="input"
        required
      />

      <button type="submit" className="btn-primary">Register</button>

      <p className="text-sm">
        Already have an account?{' '}
        <span onClick={() => dispatch(setAuthType('login'))} className="text-blue-600 cursor-pointer">
          Login
        </span>
      </p>
    </form>
  );
};

export default Register;
