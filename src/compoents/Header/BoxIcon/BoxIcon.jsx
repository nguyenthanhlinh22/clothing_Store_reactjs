import styles from '../styles.module.scss';
import fb_icon from '@icons/svg/fb_icon.svg';
import ins_icon from '@icons/svg/ins_icon.svg';
import ytb_icon from '@icons/svg/ytb_icon.svg';

function BoxIcon({type, href}) {
    const {BoxIcon} = styles;

    const handleRenderIcon = (type, href) => {
        switch (type) {
            case 'fb':
                return  fb_icon;
            case 'ins':
                return ins_icon;
            case 'ytb':
                return ytb_icon;
            default:
                return null;
        }
    }

    return ( 
        <div className={BoxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
     );
}

export default BoxIcon;





//type phân biệt func compoent hiển thị icon nào
//href link chuyển hướng khi click vào icon