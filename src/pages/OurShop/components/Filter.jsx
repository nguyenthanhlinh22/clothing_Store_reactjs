import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';

function Filter() {
    const { 
        containerFilter, 
        boxIcon, 
        boxLeft, 
        selectBox, 
        show, 
        sort 
    } = styles;

    // Lấy các giá trị và hàm từ Context
    const { 
        showOptions, 
        sortOptions, 
        typeOptions, // Thêm typeOptions
        setSortId, 
        setShowId, 
        setType, // Thêm setType
        setIsShowGrid 
    } = useContext(OurShopContext);

    // Hàm xử lý giá trị từ SelectBox
    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else if (type === 'show') {
            setShowId(value);
        } else if (type === 'type') { // Lọc theo type
            setType(value);
        }
    };

    // Hàm chuyển đổi giữa Grid và List view
    const handleGetShowGrid = (type) => {
        setIsShowGrid(type === 'grid');
    };

    return (
        <div className={containerFilter}>
            {/* Bộ lọc bên trái */}
            <div className={boxLeft}>
                {/* Lọc theo sắp xếp */}
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type="sort"
                />

                {/* Biểu tượng Grid/List */}
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '25px', cursor: 'pointer' }}
                        onClick={() => handleGetShowGrid('grid')}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1',
                        }}
                    />
                    <CiCircleList
                        style={{
                            fontSize: '27px',
                            color: '#222',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleGetShowGrid('list')}
                    />
                </div>
            </div>

            {/* Bộ lọc bên phải */}
            <div className={boxLeft}>
                {/* Lọc theo số lượng hiển thị */}
                <div
                    style={{
                        fontSize: '14px',
                        color: '#555',
                    }}
                >
                    Show
                </div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type="show"
                />
            </div>

            {/* Thêm lọc theo type */}
            <div className={boxLeft}>
                <div
                    style={{
                        fontSize: '14px',
                        color: '#555',
                    }}
                >
                    Type
                </div>
                <SelectBox
                    options={typeOptions}
                    getValue={getValueSelect}
                    type="type"
                />
            </div>
        </div>
    );
}

export default Filter;
