import { Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GoogleSignUpButton: React.FC = () => (
    <Link href={`https://accounts.google.com/lifecycle/steps/signup/name?continue=https://myaccount.google.com/?utm_source%3Dsign_in_no_continue%26pli%3D1&ddm=1&dsh=S-97656955:1736798625766664&ec=GAlAwAE&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&service=accountsettings&TL=AO-GBTfGm42gj2DrdNdYU5zdZAK8_ff48oN9zh28lpVAro7wyvdv2ZT2v5Tyc6Cl`}>

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
            Sign Up with Google
        </Button>
    </Link>
);

export default GoogleSignUpButton;