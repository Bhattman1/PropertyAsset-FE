'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Input from '../components/Input';
import BackButton from '../components/BackButton';
import { PersonIcon, MailIcon, PhoneIcon } from '../components/Icons';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle create account logic here
    console.log('Create account:', formData);
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
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#2B2B2B] mb-4 text-center">
        Create your <span className="text-[#30e4e4] font-black">account</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-[#666666] text-center mb-8">
        quis nostrud exercitation ullamco laboris nisi ut
      </p>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        {/* Full Name Input */}
        <Input
          type="text"
          placeholder="Full name"
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          icon={<PersonIcon />}
          rightIcon={formData.fullName && <PersonIcon />}
          required
        />
        
        {/* Email Input */}
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          icon={<MailIcon />}
          rightIcon={formData.email && <MailIcon />}
          required
        />
        
        {/* Mobile Input */}
        <Input
          type="tel"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(e) => handleInputChange('mobile', e.target.value)}
          icon={<PhoneIcon />}
          rightIcon={formData.mobile && <PhoneIcon />}
          required
        />
      </form>
      
      {/* Footer Links */}
      <div className="flex justify-between text-sm mb-8">
        <Link href="/terms" className="text-[#2B2B2B] hover:text-[#30e4e4]">
          Terms of service
        </Link>
        <Link href="/privacy" className="text-[#2B2B2B] hover:text-[#30e4e4]">
          Privacy policy
        </Link>
      </div>
      
      {/* Send Code Button */}
      <Button 
        type="submit"
        variant="primary" 
        size="lg"
        className="w-full"
        onClick={handleSubmit}
      >
        Send Code
      </Button>
      
      {/* Back to Sign In */}
      <div className="text-center mt-8">
        <span className="text-[#2B2B2B]">Already have an account? </span>
        <Link href="/signin" className="font-semibold text-[#30e4e4] hover:text-[#2bc8c8]">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountPage; 