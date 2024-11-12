import styles from './ProductItem.module.scss';
import reLoadIcon from '@icons/svg/reload_icon.svg';
import heartIcon from '@icons/svg/heart_icon.svg';
import CartIcon from '@icons/svg/cart_icon.svg';
import BoxIcon from '../Header/BoxIcon/BoxIcon';

function ProductItem({ src , preSrc , title , price }) {
    const { boxImg, showImgWhenHover , showFuntionWhenHover, boxIcon,titleProduct, PriceProduct } = styles;



    // Định dạng giá theo VND
    const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);

    return (
        <div>
            {/* Img  */}
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    src={preSrc}
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showFuntionWhenHover}>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='reLoadIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='reLoadIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='reLoadIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='reLoadIcon' />
                    </div>
                </div>
            </div>
            {/* content */}
            <div className={titleProduct}>{title}</div>
            <div className={PriceProduct}>{formattedPrice} VND</div>
        </div>
    );
}

export default ProductItem;
