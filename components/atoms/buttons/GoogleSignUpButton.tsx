import { Button } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const GoogleSignUpButton: React.FC = () => (
    <Button
        variant="outline"
        fullWidth
        styles={{
            root: {
                borderColor: '#AEE7EB',
                borderRadius: '12px',
                color: 'black',
                fontSize: '16px',
                fontWeight: '500px',
                '&:hover': {
                    backgroundColor: '#f1f5f9',
                },
            },
        }}
        className="flex items-center justify-center "
    >
        <Image
            src="/images/Google.png"
            alt="Google Logo"
            className="mr-2"
            width={20}
            height={20}
        />
        Sign Up with Google
    </Button>
);

export default GoogleSignUpButton;