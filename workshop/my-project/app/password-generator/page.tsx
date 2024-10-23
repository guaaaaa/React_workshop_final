"use client";
import React, { useState } from 'react';
import Link from "next/link";

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState('');
  const strength = getPasswordStrength(password); // Calculate strength directly from state

  return (
    <div className="h-screen w-screen flex bg-pink-400 justify-center items-center">
      
      <Link href="/" className="absolute top-0 left-0 m-4 p-2 border-2">Back</Link>
      <div className="flex flex-col text-center max-w-sm p-4 border rounded-lg shadow-lg bg-white bg-opacity-10">
        <h1 className="text-3xl mb-6">Password Strength Checker</h1>
        
        <label htmlFor="password" className="block text-lg font-medium mb-2">
          Enter Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        
        <div className={`h-2 rounded mb-2 ${getStrengthColor(strength)}`}></div>
        <p className="text-center font-semibold">
          {getStrengthLabel(strength)}
        </p>
        
        <Link href="/" className="mt-6 border-2 p-2">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

// Helper function to calculate password strength
const getPasswordStrength = (password: string) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++; // Uppercase letter
  if (/\d/.test(password)) score++;    // Number
  if (/[\W_]/.test(password)) score++; // Special character
  return score;
};

// Helper function to get strength label
const getStrengthLabel = (score: number) => {
  const labels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
  return labels[score] || 'Invalid';
};

// Helper function to get Tailwind color class based on strength
const getStrengthColor = (score: number) => {
  const colors = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-yellow-300',
    'bg-green-400',
    'bg-green-600',
  ];
  return colors[score] || 'bg-gray-300';
};

export default PasswordStrengthChecker;
