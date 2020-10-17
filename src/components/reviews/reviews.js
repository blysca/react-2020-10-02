import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, list }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => {
        console.log('====================================');
        console.log(list[review]);
        console.log('====================================');
        return <Review key={review} {...list[review]} />;
      })}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default connect((state) => ({
  list: state.reviews,
}))(Reviews);
