import React from 'react';

interface ResendButtonProps {
    onResend: () => void;
}

const ResendButton: React.FC<ResendButtonProps> = ({ onResend }) => {
    return (
        <div className="flex justify-center items-center mb-4">
            <p className="text-base text-black font-poppins flex items-center justify-center">
                Don’t receive any code?{' '}
                <button
                    onClick={onResend}
                    className="text-[#00CCDC] m-[7px] text-sm font-poppins underline flex"
                >
                    Resend
                </button>
            </p>
        </div>
    );
};

export default ResendButton;
