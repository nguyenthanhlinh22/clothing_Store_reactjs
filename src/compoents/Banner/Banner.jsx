import styles from './Banner.module.scss';
import MyButton from '../Button/Button';

function Banner() {
    const { container, content, title, des,btn } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Books Store</h1>
                <div className={des}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </div>
                <div className={btn}>
                <MyButton content={'Go to shop '} />    
                </div>
            </div>
        </div>
    );
}

export default Banner;
