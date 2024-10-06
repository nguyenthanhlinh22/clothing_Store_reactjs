import styles from './HomePage.module.scss';
import MyHeader from '../Header/Header';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling';


function HomePage() {
   
    return (
        
            <div>
                <MyHeader />
                <Banner />
                <Info/>
                <AdvanceHeadling/>
                
            </div>
       
    );
}

export default HomePage;
