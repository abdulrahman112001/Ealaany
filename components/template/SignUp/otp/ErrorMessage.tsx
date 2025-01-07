import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <p className="text-left text-sm font-poppins mb-4 ml-[70px] text-[#FF5247]">{message}</p>
    );
};

export default ErrorMessage;
