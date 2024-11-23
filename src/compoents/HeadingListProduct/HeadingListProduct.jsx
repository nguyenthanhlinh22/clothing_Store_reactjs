import CountdownTimer from "../CountdownTime/CountdownTime";
import MainLayout from "../Layout/Layout";
import styles from './HeadlingListProduct.module.scss';
import CountdownBanner from "../CountdownBanner/CountdownBanner";
import ProductItem from "../ProductItem/ProductItem";

function HeadingListProduct({ data }) {
    const { container, containerItem } = styles;
    const targetDate = new Date('2021-12-31T00:00:00');
    console.log("HeadingListProduct -> data", data);
    
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {
                        data.map((item) => {
                            return (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]}  // Assuming the first image is for the default src
                                    preSrc={item.images[1]}  // Assuming the second image is for the hover effect
                                    title={item.name}
                                    price={item.price}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
