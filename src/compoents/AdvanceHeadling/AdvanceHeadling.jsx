import React from 'react';
import MainLayout from '../Layout/Layout';
import styles from './AdvanceHeadling.module.scss';

function AdvanceHeadling() {
    const { container, Headling, containerMidleBox, des, title } = styles;
    return (  
       <MainLayout>
        <div className={container}>
            <div className={Headling}></div>
            <div className={containerMidleBox}>
                <p className={des}>Don't Miss Super offer </p>
                <p className={title}>Our Best product</p>
            </div>
            <div className={Headling}></div>
        </div>
       </MainLayout>
    );
}

export default AdvanceHeadling;