import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import styles from './FiveBlocksCarousel.module.css';

const initialPhotos = [
    { src: '/images/b1.jpeg', alt: 'Photo 1', info: 'Інформація про фото 1' },
    { src: '/images/b2.jpeg', alt: 'Photo 2', info: 'Інформація про фото 2' },
    { src: '/images/b3.jpeg', alt: 'Photo 3', info: 'Інформація про фото 3' },
    { src: '/images/b4.jpeg', alt: 'Photo 4', info: 'Інформація про фото 4' },
    { src: '/images/b5.jpeg', alt: 'Photo 5', info: 'Інформація про фото 5' },
    { src: '/images/b1.jpeg', alt: 'Photo 5', info: 'Інформація про фото 6' },
    { src: '/images/b2.jpeg', alt: 'Photo 5', info: 'Інформація про фото 7' },
    { src: '/images/b3.jpeg', alt: 'Photo 5', info: 'Інформація про фото 8' },
    { src: '/images/b4.jpeg', alt: 'Photo 5', info: 'Інформація про фото 9' },
    { src: '/images/b5.jpeg', alt: 'Photo 5', info: 'Інформація про фото 10' },
    { src: '/images/b1.jpeg', alt: 'Photo 5', info: 'Інформація про фото 11' },
    { src: '/images/b2.jpeg', alt: 'Photo 5', info: 'Інформація про фото 12' },
];

const CarouselFiveElements = () => {
    const [photos, setPhotos] = useState(initialPhotos);

    const nextSlide = () => {
        const newPhotos = [...photos.slice(1), photos[0]]; // Видаляємо перший елемент та додаємо його в кінець
        setPhotos(newPhotos);
    };

    const prevSlide = () => {
        const newPhotos = [photos[photos.length - 1], ...photos.slice(0, photos.length - 1)]; // Видаляємо останній елемент та додаємо його на початок
        setPhotos(newPhotos);
    };


    return (
        <div className={styles.carousel}>
            <h1 className={styles.h1}>FiveElements Carousel</h1>
            <div className={styles.trackContainer}>
                <ul className={styles.track}>
                    {photos.slice(0, 5).map((photo, index) => (
                        <li className={styles.slide} key={index}>
                            <img src={photo.src} alt={photo.alt}/>
                            <div className={styles.info}>
                                <p>{photo.info}</p>
                                <p>{photo.info}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.blockBtn}>
                <button onClick={prevSlide}><IoIosArrowBack className={styles.icon}/></button>
                <button onClick={nextSlide}><IoIosArrowForward className={styles.icon}/></button>
            </div>
        </div>
    );
};

export default CarouselFiveElements;