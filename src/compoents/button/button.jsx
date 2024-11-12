import styles from './Button.module.scss';
import classNames from 'classnames';

function MyButton({content, isPriamry = true, ...props}) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPriamry,
                [secondaryBtn]: !isPriamry
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default MyButton;