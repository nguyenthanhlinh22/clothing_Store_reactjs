import React from 'react';
import InputCommon from '../../InputCommon/InputCommon'; // Corrected import path
import styles from './Login.module.scss';
import Button from '../../Button/Button'; 

function Login() {
    const { container, title, boxRememberme, quen } = styles;
    return (
        <div className={container}>
            <div className={title}>Login</div>
            <InputCommon label='Email' type='text' isRequired />
            <InputCommon label='Mật Khẩu' type='password' isRequired /> {/* Corrected 'label' prop */}

            <div className={boxRememberme}>
                <input type="checkbox" name="" id="" />
                <span>Ghi nhớ</span>
            </div>
            <Button content='Đăng nhập' /> 

            <div className={quen}>Tôi quên Mật Khẩu ?</div>
            
        </div>
    );
}

export default Login;