import React from 'react';

interface OtpInputProps {
    value: string;
    index: number;
    onChange: (value: string, index: number) => void;
    error: boolean;
}

const OtpInput: React.FC<OtpInputProps> = ({ value, index, onChange, error }) => {
    return (
        <input
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => onChange(e.target.value, index)}
            className={`w-16 h-16 border-2 rounded-xl text-center text-xl focus:outline-none transition-all ${value
                ? error
                    ? 'bg-[#C24342] bg-opacity-30 border-[#FF5247] text-[#FF5247]'
                    : 'bg-[#008994] bg-opacity-20 border-[#00CCDC] text-[#00CCDC]'
                : 'bg-white border-gray-300 text-black'
                }`}
        />
    );
};

export default OtpInput;
