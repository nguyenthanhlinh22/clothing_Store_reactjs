import React from 'react';
import HeaderSideBar from '../components/HeaderSidebar/HeaderSidebar'; // Corrected import path
import { CiHeart } from 'react-icons/ci';
import styles from './WishList.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct'; // Corrected import path
import Button from '../../Button/Button'; // Corrected import path

function WishList() {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={
                        <CiHeart
                            style={{
                                fontSize: '30px'
                            }}
                        />
                    }
                    title='WISHLIST'
                />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} isPrimary={false} /> {/* Corrected 'isPrimary' prop */}
            </div>
        </div>
    );
}

export default WishList;