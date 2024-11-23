import React from 'react';
import styles from './InputCommon.module.scss';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

function InputCommon({ label, type, isRequired = false }) {
    const { container, lableInput, boxInput, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={lableInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
