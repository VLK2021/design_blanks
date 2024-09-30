import React from 'react';
import clsx  from "clsx";

import styles from './Header.module.css';
import NavigateMenuInHeader from "../NavigateMenuInHeader/NavigateMenuInHeader";


const Header = () => {
    return (
        <div className={clsx(styles.wrap)}>
            <div>logo</div>

            <div>
                <NavigateMenuInHeader/>
            </div>

            <div>SignIn/SignUp</div>

        </div>
    );
};

export default Header;


