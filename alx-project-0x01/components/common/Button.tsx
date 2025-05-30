import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
    <button onClick={onClick} style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc' }}>
        {children}
    </button>
);

export default Button;