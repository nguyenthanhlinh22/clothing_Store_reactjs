import MyButton from '../Button/Button';
import styles from './SaleHomePage.module.scss';
import useTranslateX from './TranslateXImage';

function SaleHomePage() {
    const { container, title, boxBtn, des, boxImage } = styles;

    const { translateXPosition } = useTranslateX();

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.5s ease'
                }}
            >
                <img src='src/assets/images/img1.jpg' />
            </div>
            <div>
                <h2 className={title}>Books Sale Of The Years</h2>
                <p className={des}>
                    Sách là Kho Tri Thức Vô Hạn, Các Bạn Hãy trở thành nhân tài
                    của đất nước
                </p>

                <div className={boxBtn}>
                    <MyButton content={'Read More'} isPriamry={false} />
                </div>
            </div>

            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.5s ease'
                }}
            >
                <img src='src/assets/images/img2.jpg' alt='' />
            </div>
        </div>
    );
}

export default SaleHomePage;
