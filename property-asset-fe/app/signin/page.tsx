'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Input from '../components/Input';
import BackButton from '../components/BackButton';
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, GoogleIcon, FacebookIcon } from '../components/Icons';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password });
  };

  const handleBack = () => {
    // Handle back navigation
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Status Bar Placeholder */}
      <div className="h-6 mb-8"></div>
      
      {/* Header with Back Button */}
      <div className="flex justify-end mb-8">
        <BackButton onClick={handleBack} />
      </div>
      
      {/* Headline */}
      <h1 className="text-3xl font-bold text-[#2B2B2B] mb-4 text-center">
        Let's <span className="text-[#30e4e4] font-black">Sign In</span>
      </h1>
      
      {/* Body Text */}
      <p className="text-[#666666] text-center mb-8">
        quis nostrud exercitation ullamco laboris nisi ut
      </p>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        {/* Email Input */}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<MailIcon />}
          required
        />
        
        {/* Password Input */}
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<LockIcon />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#666666] hover:text-[#2B2B2B]"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
          required
        />
        
        {/* Password Options */}
        <div className="flex justify-between text-sm">
          <Link href="/forgot-password" className="text-[#666666] hover:text-[#30e4e4]">
            Forgot password?
          </Link>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#666666] hover:text-[#30e4e4]"
          >
            {showPassword ? 'Hide password' : 'Show password'}
          </button>
        </div>
        
        {/* Login Button */}
        <Button 
          type="submit"
          variant="primary" 
          size="lg"
          className="w-full"
        >
          Login
        </Button>
      </form>
      
      {/* Separator */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex-1 h-px bg-[#E5E5E5]"></div>
        <span className="px-4 text-[#999999] text-sm">OR</span>
        <div className="flex-1 h-px bg-[#E5E5E5]"></div>
      </div>
      
      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Button 
          variant="outline" 
          icon={<GoogleIcon />}
          className="w-full"
        >
          Google
        </Button>
        <Button 
          variant="outline" 
          icon={<FacebookIcon />}
          className="w-full"
        >
          Facebook
        </Button>
      </div>
      
      {/* Registration Prompt */}
      <div className="text-center mb-8">
        <span className="text-[#2B2B2B]">Don't have an account? </span>
        <Link href="/create-account" className="font-semibold text-[#30e4e4] hover:text-[#2bc8c8]">
          Register
        </Link>
      </div>
      
      {/* FAQ Button */}
      <div className="flex justify-center">
        <Button 
          variant="secondary" 
          size="sm"
          className="px-8"
        >
          FAQ
        </Button>
      </div>
    </div>
  );
};

export default SignInPage; 