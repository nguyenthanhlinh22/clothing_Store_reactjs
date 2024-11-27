import { useEffect, useState, createContext } from 'react';
import { getProducts } from '@/apis/productService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: 'Default sorting', value: '0' },
        { label: 'Sort by popularity', value: '1' },
        { label: 'Sort by average rating', value: '2' },
        { label: 'Sort by latest', value: '3' },
        { label: 'Sort by price: low to high', value: '4' },
        { label: 'Sort by price: high to low', value: '5' },
    ];

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'all' },
    ];

    const typeOptions = [
        { label: 'All Types', value: '' },
        { label: 'Type A', value: 'Type A' },
        { label: 'Type B', value: 'Type B' },
        { label: 'Type C', value: 'Type C' },
        // Thêm các loại type khác ở đây
    ];

    // State quản lý dữ liệu và UI
    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [type, setType] = useState(''); // Thêm type để lọc
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(null); // Thêm trạng thái lỗi

    // Hàm fetch sản phẩm
    const fetchProducts = async (query, isAppending = false) => {
        try {
            const res = await getProducts(query);
            setProducts((prev) => (isAppending ? [...prev, ...res.contents] : res.contents));
            setPage(res.page);
            setTotal(res.total);
        } catch (err) {
            console.error(err);
            setError(err.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
            setIsLoadMore(false);
        }
    };

    // Xử lý tải thêm sản phẩm
    const handleLoadMore = () => {
        if (isLoadMore) return; // Ngăn gọi API nhiều lần
        const query = {
            sortType: sortId,
            page: page + 1,
            limit: showId === 'all' ? undefined : showId,
            type: type || undefined, // Chỉ thêm type nếu không rỗng
        };

        setIsLoadMore(true);
        fetchProducts(query, true);
    };

    // Fetch sản phẩm khi sortId, showId, hoặc type thay đổi
    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId === 'all' ? undefined : showId,
            type: type || undefined, // Chỉ thêm type nếu không rỗng
        };

        setIsLoading(true);
        fetchProducts(query);
    }, [sortId, showId, type]);

    // Giá trị được truyền xuống Context
    const values = {
        sortOptions,
        showOptions,
        typeOptions, // Truyền typeOptions xuống
        setSortId,
        setShowId,
        setType, // Thêm setter cho type
        setIsShowGrid,
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore,
        error, // Thêm trạng thái lỗi vào Context
    };

    return <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>;
};
