import React from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';
import styles from './Cart.module.scss';
import Button from '../../Button/Button'; // Corrected import path
import ItemProduct from '../components/ItemProduct/ItemProduct'; // Corrected import path
import HeaderSideBar from '../components/HeaderSidebar/HeaderSidebar'; // Corrected import path

function Cart() {
    const { container, boxContent, total, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<PiShoppingCartSimple style={{ fontSize: '30px' }} />}
                    title='Giỏ Hàng'
                />
                <ItemProduct />
            </div>
            <div>
                <div className={total}>
                    <p>Tổng Tiền:</p>
                    <p>1000000</p>
                </div>
                <div className={boxBtn}>
                    <Button content={'Xem giỏ hàng'} />
                    <Button content={'Thanh toán'} isPrimary={false} />{' '}
                    {/* Corrected 'isPrimary' prop */}
                </div>
            </div>
        </div>
    );
}

export default Cart;
