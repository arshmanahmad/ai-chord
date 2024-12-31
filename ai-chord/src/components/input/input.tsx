import React from 'react';

interface InputProps {
    label: string;
    type: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    onIconClick?: () => void;
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    placeholder,
    value,
    name,
    onChange,
    icon,
    onIconClick,
}) => {
    return (
        <div className="flex flex-col space-y-2 mt-[0.5rem] w-full items-start">
            <label htmlFor={name} className="text-gray-700 font-semibold">{label}</label>
            <div className="relative w-full h-[2.5rem] md:h-[3rem]">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                    className="w-full h-full p-2 bg-[#f6f5f5] text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Added padding-right to make space for the icon
                />
                {icon && (
                    <span
                        className="absolute inset-y-0 right-2 flex items-center text-gray-600 cursor-pointer"
                        onClick={onIconClick}
                    >
                        {icon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;
