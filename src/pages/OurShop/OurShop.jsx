import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate nếu chưa sử dụng
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import Banner from './components/Banner';
import Filter from './components/Filter';
import styles from './styles.module.scss';
import ListProducts from './components/ListProducts';


function OurShop() {
    const { container, functionBox, specialText, btnBack, content } = styles;

    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    // Hàm xử lý quay lại trang trước đó
    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    return (
        <>
            {/* Header */}
            <MyHeader />

            {/* Main Layout */}
            <MainLayout>
                {/* Container chính */}
                <div className={container}>
                    {/* Box chức năng */}
                    <div className={functionBox}>
                        {/* Điều hướng */}
                        <div>
                            Trang Chủ &gt; <span className={specialText}>Cửa Hàng</span>
                        </div>
                        
                        {/* Nút quay lại */}
                        <div
                            className={btnBack}
                            onClick={handleBackPreviousPage}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>

                    {/* Banner */}
                    <Banner />

                    {/* Content chính của trang */}
                    <div className={content}>
                        {/* Bộ lọc sản phẩm */}
                        {/* <Filter /> */}
                        {/* Thêm các thành phần khác như danh sách sản phẩm hoặc phân trang tại đây */}
                        <ListProducts   />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default OurShop;
