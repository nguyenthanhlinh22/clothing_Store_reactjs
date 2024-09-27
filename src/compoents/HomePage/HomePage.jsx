import Banner from '../Banner/Banner';
import MyHeader from '../Header/Header';
import styles from './HomePage.module.scss';

function HomePage() {
    const {containerHomePage} = styles;
    return (
        <>
            <div className={containerHomePage}>
                <MyHeader />
                <Banner />
            </div>
        </>
    );
}

export default HomePage;
