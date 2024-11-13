import styles from './Banner.module.scss';
import MyButton from '../Button/Button';

function Banner() {
    const { container, content, title, des,btn } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Của Hàng Sách</h1>
                <div className={des}>
                Hãy làm cho tri thức của bạn thêm phần đặc biệt trong năm nay.
                </div>
                <div className={btn}>
                <MyButton content={'Đến Của Hàng'} />    
                </div>
            </div>
        </div>
    );
}

export default Banner;
