import CountdownTimer from '@components/CountdownTime/CountdownTime';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function Banner() {
    const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;
    const targetDate = '2025-12-31T00:00:00';

    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <div className={title}>Những Loại Sách Mới Đã Trở Lại</div>

                    <div className={boxBtn}>
                        <Button content='Mua Ngay' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;