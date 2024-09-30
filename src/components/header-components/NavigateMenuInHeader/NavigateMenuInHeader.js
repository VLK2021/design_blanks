import React from 'react';
import clsx from 'clsx';
import {NavLink} from 'react-router-dom';

import {menuItems} from '../headerConstants';
import styles from './NavigateMenuInHeader.module.css';


const NavigateMenuInHeader = () => {

    return (
        <nav className={clsx(styles.wrap)}>
            <ul className={clsx(styles.ul)}>
                {menuItems.map((obj) => (
                    <li key={obj.href} className={styles.li}>
                        <NavLink
                            to={obj.href}
                            className={({isActive}) => clsx(isActive && 'active')}>
                            {obj.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigateMenuInHeader;
