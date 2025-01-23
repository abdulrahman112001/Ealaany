import { Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GoogleSignInButton: React.FC = () => (
    <Link href={`https://accounts.google.com/v3/signin/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&authuser=0&ddm=1&flowName=GlifWebSignIn&flowEntry=AddSession`}>
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
                    height: '56px',
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
            Sign In with Google
        </Button>
    </Link>
);

export default GoogleSignInButton;