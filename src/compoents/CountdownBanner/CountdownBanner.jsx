import React from 'react';
import styles from './CountdownBanner.module.scss'
import CountdownTimer from '../CountdownTime/CountdownTime';
import MyButton from '../Button/Button';

function CountdownBanner() {
   const {container, containerTimmer, title, btn} = styles ;
   const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={container} >
            <div className={containerTimmer}>
                <CountdownTimer targetDate={targetDate}/>
            </div>
            <p className={title}>Những Tác Phẩm Hay Sẽ Trở Lại</p>
            <div className={btn}>
                <MyButton content={'Mua Ngay'}/>
            </div>
        </div>
    );
}

export default CountdownBanner;