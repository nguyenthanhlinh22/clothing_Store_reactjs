import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner'; // Tích hợp thêm CountdownBanner
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ListProducts() {
    const { containerProduct, sectionListProduct, rotate, bannerContainer } = styles;
    const {
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore
    } = useContext(OurShopContext);

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                {/* Countdown Banner */}
                <div className={bannerContainer}>
                    <CountdownBanner />
                </div>

                {/* Danh sách sản phẩm */}
                {isLoading ? (
                    // Hiển thị trạng thái Loading
                    <div className="loading-container">
                        <LoadingTextCommon />
                    </div>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {/* Render các sản phẩm */}
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]} // Hình ảnh mặc định
                                    prevSrc={item.images[1]} // Hình ảnh hover
                                    name={item.name} // Tên sản phẩm
                                    price={item.price} // Giá sản phẩm
                                    details={item} // Chi tiết sản phẩm (nếu cần)
                                    isHomepage={false}
                                />
                            ))}
                        </div>

                        {/* Nút Load More */}
                        {products.length < total && (
                            <div
                                style={{
                                    width: '180px',
                                    margin: '50px auto'
                                }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextCommon />
                                        ) : (
                                            'LOAD MORE PRODUCTS'
                                        )
                                    }
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
