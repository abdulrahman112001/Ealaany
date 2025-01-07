import React from 'react';

interface SubmitButtonProps {
    onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
    return (
        <button
            onClick={onSubmit}
            className="w-full bg-[#00CCDC] mt-4 text-white py-2 rounded-xl hover:opacity-40 transition"
        >
            Submit
        </button>
    );
};

export default SubmitButton;
