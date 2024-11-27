import axiosClient from './axiosClient';

const getProducts  = async () => {
    const url = 'https://virtserver.swaggerhub.com/THANHLINHNGUYEN22032/Books/1.0.0/products';
    try {
        const response = await axiosClient.get(url);
        console.log("Fetch products successfully: ", response.data);
        return response.data; // Trả về dữ liệu phản hồi nếu không có lỗi
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Ném lỗi nếu có
    }
};

export { getProducts };
