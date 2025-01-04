import { Anchor, Text } from '@mantine/core';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const LoginLink: React.FC = () => (
    <div className='mt-8'>
        <Text size="sm" className="text-black text-base flex items-center justify-center font-poppins text-center mt-4">
            Already have an account?{' '}
            <Anchor
            
                href="/login"
                size="sm"
                styles={{
                    root: {
                        color: '#D83232',
                        display:'flex',
                        textDecoration: 'underline',
                        margin:"0px 8px",
                        fontSize: '14px',
                        '&:hover': {
                            backgroundColor: '#DC2626',
                        },
                    },
                }}
            >
                Log in <FiExternalLink className='mt-[3px] mx-[2px]' />
            </Anchor>
        </Text>
    </div>
);

export default LoginLink;