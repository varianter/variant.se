import CardComponent from "./cardComponent";
import { CardData } from "./types";
import styles from "./index.module.css";
import Layout from 'src/layout';

export default function Ee({employeeCardData}:{employeeCardData:CardData[]}) {
    
    return(
        <Layout title="Varianter">
            <div className={styles.container}>
                {employeeCardData.map((cardData:CardData) => {
                    return (
                        <CardComponent key={cardData.id} cardData={cardData} />
                    );
                })}
            </div>
        </Layout>
    );
}