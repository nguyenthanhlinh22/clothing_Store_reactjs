import { useState, useEffect } from 'react';
import MyHeader from '../Header/Header';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '../HeadingListProduct/HeadingListProduct';
import { getProducts } from '@/apis/productService'; // Import service
import PopularProduct from '../PopularProduct/PopularProduct';

function HomePage() {
    const [products, setProducts] = useState([]); // State để lưu sản phẩm
    const [loading, setLoading] = useState(true); // State để kiểm tra trạng thái tải
    const [error, setError] = useState(null); // State để lưu lỗi

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // Gọi API
                setProducts(data); // Lưu danh sách sản phẩm vào state
                setLoading(false); // Xong việc tải dữ liệu
                console.log("Fetch products successfully: ", data);
            } catch (error) {
                setError("Failed to load products."); // Nếu có lỗi
                setLoading(false);
            }
        };

        fetchProducts(); // Gọi hàm fetchProducts khi component mount
    }, []); // Chỉ chạy khi component mount

    // Nếu đang tải, hiển thị loading
    if (loading) {
        return <div>Loading...</div>;
    }

    // Nếu có lỗi, hiển thị thông báo lỗi
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProduct data={products.slice(0,2)} />
            <PopularProduct data={products.slice(2,10)} />
        </div>
    );
}

export default HomePage;
