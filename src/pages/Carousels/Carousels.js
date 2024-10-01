import React from 'react';
import clsx from "clsx";

import styles from './Carousels.module.css';
import FullCarousel from "../../components/carousels-components/FullCarousel/FullCarousel";
import DotsCarousel from "../../components/carousels-components/DotsCarousel/DotsCarousel";
import CarouselFiveElements from "../../components/carousels-components/FiveBlocksCarousel/FiveBlocksCarousel";


const Carousels = () => {
    return (
        <div className={clsx(styles.wrap)}>
            <div className={clsx(styles.full)}>
                <FullCarousel/>
            </div>
            <div className={clsx(styles.full)}>
                <DotsCarousel/>
            </div>
            <div className={clsx(styles.full)}>
                <CarouselFiveElements/>
            </div>
        </div>
    );
};

export default Carousels;