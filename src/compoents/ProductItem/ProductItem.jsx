import styles from './ProductItem.module.scss';
import reLoadIcon from '@icons/svg/reload_icon.svg';

import { IoReloadSharp } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";





function ProductItem({ src , preSrc , title , price }) {
    const { boxImg, showImgWhenHover , showFuntionWhenHover, boxIcon,titleProduct, PriceProduct,img } = styles;



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
                        <CiShoppingCart alt='CiShoppingCart' style={{ fontSize: '22px'}} /> 
                    </div>
                    <div className={boxIcon}>
                        <CiHeart alt='CiHeart' style={{ fontSize: '25px'}} /> 
                    </div>
                    <div className={boxIcon}>
                    <IoReloadSharp alt='IoReloadSharp' style={{ fontSize: '20px'}} /> 
                    </div>
                    <div className={boxIcon}>
                    <MdOutlineRemoveRedEye alt='IoReloadSharp' style={{ fontSize: '20px'}}       /> 
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
