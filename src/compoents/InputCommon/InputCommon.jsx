import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import styles from './InputCommon.module.scss';

function InputCommon({
    label,
    type = 'text',
    isRequired = false,
    formik,
    id,
    ...props
}) {
    const { container, labelInput, boxInput, boxIcon, errorMessage } = styles;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <div className={container}>
            <label htmlFor={id} className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </label>
            <div className={boxInput}>
                <input
                    id={id}
                    type={inputType}
                    name={id}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    {...props}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                    </div>
                )}
            </div>
            {formik.touched[id] && formik.errors[id] && (
                <div className={errorMessage}>{formik.errors[id]}</div>
            )}
        </div>
    );
}

export default InputCommon;
