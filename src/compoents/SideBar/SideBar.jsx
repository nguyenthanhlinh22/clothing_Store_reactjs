import React from 'react';
import styles from './Sidebar.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';
import Login from '../ContentSideBar/Login/Login';
import Compare from '../ContentSideBar/Compare/Compare';
import WishList from '../ContentSideBar/WishList/WishList';
import Cart from '../ContentSideBar/cart/Cart';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, Type } = useContext(SideBarContext);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (Type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />; 
            case 'wishlist':
                return <WishList />;
            case 'cart':
                return <Cart />;
            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            />
            <div className={classNames(sideBar, { [slideSideBar]: isOpen })}>
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
