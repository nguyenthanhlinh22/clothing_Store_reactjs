import styles from './ItemProduct.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const {
        container,
        boxContent,
        title,
        price,
        boxClose,
        size,
        overlayLoading
    } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductsCart } = useContext(SideBarContext);

    const handleRemoveItem = () => {
        setIsDelete(true);
        deleteItem({
            productId,
            userId
        })
            .then((res) => {
                setIsDelete(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                setIsDelete(false);
            });
    };

    return (
        <div className={container}>
            <img src="https://i.pinimg.com/enabled_lo_mid/736x/93/27/76/932776138faae6049d78cd0d341f6160.jpg" alt='' />

            <div className={boxClose} onClick={handleRemoveItem}>
                <IoCloseOutline
                    style={{
                        fontSize: '25px',
                        color: 'c1c1c1'
                    }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>Bộ sách thứ 1</div>
                <div className={size}>Tập: 1</div>
                <div className={price}>
                    Giá: {new Intl.NumberFormat('vi-VN').format(100000)} VND
                </div>
                <div className={price}>SKU: {skuProduct}</div>
            </div>

            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

export default ItemProduct;