import CountdownTimer from "../CountdownTime/CountdownTime";
import MainLayout from "../Layout/Layout";
import styles from './HeadlingListProduct.module.scss';
import CountdownBanner from "../CountdownBanner/CountdownBanner";

function HeadingListProduct() {
    const {container, containerItem} = styles;
    const targetDate = new Date('2021-12-31T00:00:00');
    return ( 
        <MainLayout >
            <div className={container}>
                
                    <CountdownBanner />
                
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>

            </div>
        </MainLayout>
     );
}

export default HeadingListProduct;