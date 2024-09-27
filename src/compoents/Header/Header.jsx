import React from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo.png';
import reLoadIcon from '@icons/svg/reload_icon.svg';
import heartIcon from '@icons/svg/heart_icon.svg';
import CartIcon from '@icons/svg/cart_icon.svg';

function MyHeader() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        BoxLogo,
        wicons
    } = styles;
    return (
        <div className={container}> 
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
                            return <Menu content={item.content} />;
                        })}
                    </div>
                </div>
                {/* Logo */}
                <div>
                    <img className={BoxLogo} src={Logo} />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map(item => {
                            return <Menu content={item.content} />;
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            className={wicons}
                            src={reLoadIcon}
                            alt='reLoadIcon'
                        />
                        <img
                            className={wicons}
                            src={heartIcon}
                            alt='heartIcon'
                        />
                        <img className={wicons} src={CartIcon} alt='CartIcon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
