import React from 'react';
import clsx from "clsx";

import styles from './Carousels.module.css';
import FullCarousel from "../../components/carousels-components/FullCarousel/FullCarousel";


const Carousels = () => {
    return (
        <div className={clsx(styles.wrap)}>
            <div className={clsx(styles.full)}>
                <FullCarousel/>
            </div>
        </div>
    );
};

export default Carousels;