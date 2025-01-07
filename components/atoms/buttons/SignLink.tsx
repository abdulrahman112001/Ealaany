import { Anchor, Text } from '@mantine/core';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const SignLink: React.FC = () => (
    <div className='mt-8'>
        <Text size="sm" className="text-black text-base flex items-center justify-center font-poppins text-center mt-4">
            Don’t have an account?{' '}
            <Anchor

                href="/sign-up"
                size="sm"
                styles={{
                    root: {
                        color: '#D83232',
                        display: 'flex',
                        textDecoration: 'underline',
                        margin: "0px 8px",
                        fontSize: '14px',
                        '&:hover': {
                            backgroundColor: '#DC2626',
                        },
                    },
                }}
            >
                Sign Up <FiExternalLink className='mt-[3px] mx-[2px]' />
            </Anchor>
        </Text>
    </div>
);

export default SignLink;