import styles from './ProductItem.module.scss';
import reLoadIcon from '@icons/svg/reload_icon.svg';
import heartIcon from '@icons/svg/heart_icon.svg';
import CartIcon from '@icons/svg/cart_icon.svg';
import BoxIcon from '../Header/BoxIcon/BoxIcon';

function ProductItem() {
    const { boxImg, showImgWhenHover , showFuntionWhenHover, boxIcon,titleProduct, PriceProduct } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg'
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
            <div className={titleProduct}>10k yellow</div>
            <div className={PriceProduct}>$1000</div>
        </div>
    );
}

export default ProductItem;
