import React, { useContext, useEffect } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';

import useScrollHeading from '@hooks/useScrollHeading';
import classNames from 'classnames';
import { useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
function MyHeader() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        BoxLogo,
        wicons,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHeading();
    const [fixedPosition, setFixedPosition] = useState(false);
    const {  setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };


    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    



    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map(item => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map(item => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                {/* Logo */}
                <div>
                    <img className={BoxLogo} src='src/assets/images/Logo.png' />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map(item => {
                            return (
                                <Menu
                                    content={item.content}
                                 
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <CiHeart
                            style={{
                                fontSize: '25px'
                            }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCartLight
                            style={{
                                fontSize: '25px'
                            }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
