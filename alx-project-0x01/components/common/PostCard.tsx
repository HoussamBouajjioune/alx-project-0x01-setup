import React from 'react';

type PostCardProps = {
    title: string;
    content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

export default PostCard;