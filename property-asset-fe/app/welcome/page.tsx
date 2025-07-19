'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import { MailIcon, GoogleIcon, FacebookIcon } from '../components/Icons';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Status Bar Placeholder */}
      <div className="h-6 mb-8"></div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="aspect-square bg-[#F5F5F5] rounded-lg"></div>
        <div className="aspect-square bg-[#F5F5F5] rounded-lg"></div>
        <div className="aspect-square bg-[#F5F5F5] rounded-lg"></div>
        <div className="aspect-square bg-[#F5F5F5] rounded-lg"></div>
      </div>
      
      {/* Headline */}
      <h1 className="text-3xl font-bold text-[#2B2B2B] mb-4 text-center">
        Ready to <span className="text-[#30e4e4]">explore</span>?
      </h1>
      
      {/* Body Text */}
      <p className="text-[#666666] text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </p>
      
      {/* Primary Button */}
      <div className="mb-6">
        <Button 
          variant="primary" 
          size="lg" 
          icon={<MailIcon />}
          className="w-full"
        >
          Continue With Email
        </Button>
      </div>
      
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
      <div className="text-center">
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

export default WelcomePage; 