import styles from '../styles.module.scss';
import { dataMenu } from '../Constants';

function Menu({content, href}) {

    const {menu} = styles;

    return (  
        <div className={menu}>{content}</div>
    );
}

export default Menu;