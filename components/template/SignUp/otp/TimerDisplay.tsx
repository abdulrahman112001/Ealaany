import Image from 'next/image';
import React from 'react';

interface TimerDisplayProps {
    timer: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timer }) => {
    return timer > 0 ? (
        <p className="flex justify-center text-sm text-[#A9A9A9] mb-2 mr-2">
            0:{timer.toString().padStart(2, '0')}
            <Image src="/images/clock.png" alt="clock" width={17} height={17} className="ml-1" />
        </p>
    ) : null;
};

export default TimerDisplay;
