import React from 'react';

const Footer: React.FC = () => (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5' }}>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
);

export default Footer;