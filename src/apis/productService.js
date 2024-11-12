import axiosClient from './axiosClient';

const getProducts  = async () => {
    const url = '/products';
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
