import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";

import styles from "./FullCarousel.module.css";
import {slidesInCarouselFull} from "../carouselsConstants";
import ButtonComponentInCarousel from "../ButtonComponentInCarousel/ButtonComponentInCarousel";



const CarouselFull = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesInCarouselFull.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesInCarouselFull.length) % slidesInCarouselFull.length);
    };

    const handleClickDiscover = () => {
        console.log('handleClickDiscover');
    }

    const handleClickPurchase = () => {
        console.log('handleClickPurchase');
    }


    return (
        <section className={styles.wrap}>
            <h1 className={styles.h1}>Full Carousel</h1>
            <div className={styles.carousel}>
                <button className={styles.prevButton} onClick={handlePrev}>
                    <IoIosArrowBack/>
                </button>

                <motion.div
                    className={styles.carouselInner}
                    key={slidesInCarouselFull[currentIndex].id}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                >
                    <article className={styles.block}>
                        <div className={styles.blockHr}>
                            <hr className={styles.hr}/>
                            <span><TbBrandReactNative className={styles.iconCarousel}/></span>
                            <hr className={styles.hr}/>
                        </div>

                        <h2>{slidesInCarouselFull[currentIndex].content.title}</h2>

                        <p>{slidesInCarouselFull[currentIndex].content.description}</p>

                        <div className={styles.blockBtn}>
                            <div className={styles.firstBtn}>
                                <ButtonComponentInCarousel onClick={handleClickDiscover}>discover</ButtonComponentInCarousel>
                            </div>

                            <div className={styles.firstBtn}>
                                <ButtonComponentInCarousel onClick={handleClickPurchase}>purchase</ButtonComponentInCarousel>
                            </div>
                        </div>
                    </article>
                </motion.div>

                <button className={styles.nextButton} onClick={handleNext}>
                    <IoIosArrowForward/>
                </button>
            </div>
        </section>
    );
};

export default CarouselFull;