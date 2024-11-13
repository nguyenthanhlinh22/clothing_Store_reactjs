import React, { useEffect } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import reLoadIcon from '@icons/svg/reload_icon.svg';
import heartIcon from '@icons/svg/heart_icon.svg';
import CartIcon from '@icons/svg/cart_icon.svg';
import useScrollHeading from '@hooks/useScrollHeading';
import classNames from 'classnames';
import { useState } from 'react';

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
                            return <Menu content={item.content} />;
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
