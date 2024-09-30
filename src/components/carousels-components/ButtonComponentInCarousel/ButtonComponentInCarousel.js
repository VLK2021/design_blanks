import React from 'react';

import styles from './ButtonComponentInCarousel.module.css';


const ButtonComponentInCarousel = ({ children, onClick }) => {
    return (
        <button className={styles.wrap} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonComponentInCarousel;