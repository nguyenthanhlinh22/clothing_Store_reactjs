import MainLayout from "../Layout/Layout";
import { dataInfo } from "./constant";
import InfoCard from "./infoCard/InfoCard";
import styles from './Info.module.scss';

function Info() {
    const {container} = styles
    return (  
      
        <MainLayout>
        <div className={container}>
           {dataInfo.map((item) =>{
                return (
               <InfoCard content={item.content} description={item.description} src={item.src}/>
                )
                
           })}
        </div>
      </MainLayout>

    );
}

export default Info;