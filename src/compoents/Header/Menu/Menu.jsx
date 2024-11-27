import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();

    const handleClickShowLogin = () => {
        if (content === 'Đăng Nhập' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }

        if (content === 'Cửa Hàng') {
            navigate('/shop');
        }
      
    };

    const handleRenderText = content => {
        if (content === 'Đăng Nhập' && userInfo) {
            // Giới hạn tên người dùng tối đa 15 ký tự và thêm "..." nếu cần
            const maxLength = 4;
            const username = userInfo?.username;

            // Cắt ngắn tên người dùng nếu quá dài
            const shortenedUsername =
                username.length > maxLength
                    ? username.slice(0, maxLength) + '...'
                    : username;

            return `Hello: ${shortenedUsername}`;
        } else {
            return content;
        }
    };

  
    
    const handleHover = () => {
        if (content === 'Đăng Nhập' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}

            {isShowSubMenu && (
                <div
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
