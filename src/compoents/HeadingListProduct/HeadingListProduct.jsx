import CountdownTimer from "../CountdownTime/CountdownTime";
import MainLayout from "../Layout/Layout";
import styles from './HeadlingListProduct.module.scss';
import CountdownBanner from "../CountdownBanner/CountdownBanner";
import ProductItem from "../ProductItem/ProductItem";

function HeadingListProduct() {
    const {container, containerItem} = styles;
    const targetDate = new Date('2021-12-31T00:00:00');
    return ( 
        <MainLayout >
            <div className={container}>
                
                    <CountdownBanner />
                
                <div className={containerItem}>
                    <ProductItem/>
                    <ProductItem/>
                </div>

            </div>
        </MainLayout>
     );
}

export default HeadingListProduct;