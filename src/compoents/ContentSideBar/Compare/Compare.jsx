import React from 'react';
import { TfiReload } from 'react-icons/tfi';
import styles from './Compare.module.scss';
import Button from '../../Button/Button'; // Corrected import path
import ItemProduct from '../components/ItemProduct/ItemProduct'; // Corrected import path
import HeaderSideBar from '../components/HeaderSidebar/HeaderSidebar'; // Corrected import path

function Compare() {
    const { container, boxContent } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<TfiReload style={{ fontSize: '30px' }} />}
                    title='COMPARE'
                />
                <ItemProduct />
            </div>
            <Button content={'VIEW COMPARE'} />
        </div>
    );
}

export default Compare;