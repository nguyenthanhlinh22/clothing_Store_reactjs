import MainLayout from "../Layout/Layout";
import ProductItem from "../ProductItem/ProductItem"; // Corrected import path
import styles from "./PopularProduct.module.scss";

function PopularProduct({data}) {
    const { container } = styles;
    return (
        <>
            <MainLayout>
                <div className={container}> 
                    {
                        data.map((item) => {
                            return (  // Make sure to return the ProductItem component here
                                <ProductItem
                                    key={item.id} // Use item.id as key for better performance
                                    src={item.images[0]}  // Assuming the first image is for the default src
                                    preSrc={item.images[1]}  // Assuming the second image is for the hover effect
                                    title={item.name}
                                    price={item.price}
                                />
                            );
                        }
                        )} 

                </div>
            </MainLayout>
        </>
    );
}

export default PopularProduct;