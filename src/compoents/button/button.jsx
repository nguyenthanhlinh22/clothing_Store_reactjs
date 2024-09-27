import styles from './Button.module.scss';

function MyButton({content}) {
    const { btn } = styles;
    return (  
        <button className={btn}>{content}</button>
    );
}

export default MyButton;