import { dataMenu } from './constant';
import styles from './MyFooter.module.scss';

function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div>
                <img
                    src='src/assets/images/Logo.png'
                    alt=''
                    width={300}
                    height={150}
                />
            </div>

            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div>{item.content}</div>
                ))}
            </div>

            <div>
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Đảm bảo thanh toán an toàn
                </p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt=''
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                Copyright © 2024 BookStore. Created by Nguyen Thanh Linh 
            </div>
        </div>
    );
}

export default MyFooter;