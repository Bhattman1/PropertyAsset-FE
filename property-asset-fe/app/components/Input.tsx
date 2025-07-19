import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  rightIcon,
  className = '',
  disabled = false,
  required = false,
}) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-transparent
          focus:outline-none focus:ring-2 focus:ring-[#30e4e4] focus:border-transparent
          placeholder:text-[#999999] text-[#2B2B2B]
          transition-all duration-200
          ${icon ? 'pl-10' : ''}
          ${rightIcon ? 'pr-10' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      />
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input; 