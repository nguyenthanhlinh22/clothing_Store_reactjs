
import styles from '../styles.module.scss';
import React, { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider'; // Import the context

function Menu({ content, href }) {
    const { menu } = styles;
    const { setType, setIsOpen } = useContext(SideBarContext); // Use context to get setType and setIsOpen

    const handleClickShowLogin = () => {
        setIsOpen(true);
        setType('Đăng nhập');
    };

    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;