import React from 'react';
import clsx from 'clsx';

import styles from './Layout.module.css';
import {Outlet} from "react-router-dom";
import Header from "../components/header-components/Header/Header";

const Layout = () => {
    return (
        <div className={clsx(styles.wrap)}>
            <div className={clsx(styles.header)}>
                <Header/>
            </div>

            <div className={clsx(styles.outlet)}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;