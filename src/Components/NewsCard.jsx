import React from 'react';
import { useParams } from 'react-router';

const NewsCard = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            NewsCard
        </div>
    );
};

export default NewsCard;