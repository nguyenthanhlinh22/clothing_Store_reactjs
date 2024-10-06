import styles from '../Info.module.scss';

function InfoCard({content, description, src}) {
    const { containerInfoCard, containerContent, title, des } = styles;
    return (
        <div className={containerInfoCard}>
            <img width={40} height={40} src={src}  />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
