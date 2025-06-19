import React from 'react';
import { Star, StarOutline } from '../../icons';

interface TierStarRatingProps {
  totalStars?: number;
  starredStars: number;
}

const TierRating: React.FC<TierStarRatingProps> = ({ totalStars = 3, starredStars }) => {
  return (
    <span className='tier-rating'>
      {
        [...Array(totalStars)].map((_, index) => (
            index < starredStars
            ?
            <Star key={index} className='tier-rating-star' />
            :
            <StarOutline key={index} className='tier-rating-star' />
        ))
      }
    </span>
  );
};

export default TierRating;
