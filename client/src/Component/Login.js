import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BaseUrl from '../BaseUrl';

export default function Login() {
  const [teamLeader_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(teamLeader_email)) {
      alert("Please enter a valid email address.");
      return;
    }

    axios
      .post(`${BaseUrl}/api/auth/login`, {
        teamLeader_email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(`${BaseUrl}/api/auth/login`);
        localStorage.setItem("token", response.data.token); // Store the token
        navigate("/play"); // Navigate to /play on success
      })
      .catch((error) => {
        console.error(error);
        // Handle error (e.g., show error message)
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Team Leader Email:
            </label>
            <input
              type="email"
              value={teamLeader_email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Login
          </button>
          <p className="text-sm text-center">
            {" "}
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-600">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
