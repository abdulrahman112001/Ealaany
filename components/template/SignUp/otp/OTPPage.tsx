import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import OtpInput from './OtpInput';
import ResendButton from './ResendButton';
import SubmitButton from './SubmitButton';
import TimerDisplay from './TimerDisplay';

const OTPPage: React.FC = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleInputChange = (value: string, index: number) => {
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 3) {
                document.getElementById(`otp-input-${index + 1}`)?.focus();
            }
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        const correctOtp = '1234';
        if (enteredOtp === correctOtp) {
            setError(false);
            setMessage('');
            setIsVerified(true);
        } else {
            setError(true);
            setMessage('Invalid OTP. Please try again.');
            setIsVerified(false);
        }
        setTimer(0);
    };

    const handleResend = () => {
        setOtp(['', '', '', '']);
        setTimer(60);
        setMessage('');
        setError(false);
    };

    return (
        <div className="flex justify-center items-center mt-20 mr-16">
            <div className="bg-white p-10 rounded-[40px] shadow-lg w-[500px]">
                <h2 className="flex justify-center items-center text-xl font-semibold font-poppins text-[#008994] mb-4">
                    Enter your OTP
                </h2>
                <div className="flex justify-center space-x-2 mb-2">
                    {otp.map((digit, index) => (
                        <OtpInput
                            key={index}
                            value={digit}
                            index={index}
                            onChange={handleInputChange}
                            error={error}
                        />
                    ))}
                </div>
                {error && message && <ErrorMessage message={message} />}
                <TimerDisplay timer={timer} />
                {timer === 0 && !isVerified && <ResendButton onResend={handleResend} />}
                <SubmitButton onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default OTPPage;
