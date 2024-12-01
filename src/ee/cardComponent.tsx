import { CardData, employeeType, skillsMap, skillsTypes } from "./types";
import styles from "./card.module.css";
import developerSvg from "./utils/developerSvg.svg";
import designerSvg from "./utils/designSvg.svg";
import projectManagerSvg from "./utils/projectManagerSvg.svg";
import footerSvg from "./utils/footerSvg.svg";
import starSvg from "./utils/starSvg.svg";
import cardBack from './utils/baksidacardBack.png';
import { useState } from "react";

export default function CardComponent({cardData}:{cardData:CardData}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const getColors = () => {
        let colors = {
            mainColor: "",
            headerSvgLink: ""
        };

        switch(cardData.stats.type) {
            case employeeType.developer:
                colors.mainColor = "#FFF3F2";
                colors.headerSvgLink = developerSvg;
                break;
            case employeeType.designer:
                colors.mainColor = "#CDF8F4";
                colors.headerSvgLink = designerSvg;
                break;
            case employeeType.projectManager:
                colors.mainColor = "#B7B4DE";
                colors.headerSvgLink = projectManagerSvg;
                break;
        }

        return colors;

    }

    const colors = getColors();

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }
    
    
    return (
        <div className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`} onClick={flipCard}>

                <div className={styles.cardFrontWrapper}>
                    <div className={styles.levelBall}>
                        <img className={styles.starSvg} src={starSvg} alt={'star'} />
                        {cardData.stats.level}
                    </div>
                    <img className={styles.image} src={cardData.image} alt={cardData.name} />

                    <div className={styles.contentWrapper} style={{backgroundColor: colors.mainColor}}>
                        <div className={styles.headerWrapper}>
                            <div className={styles.header} style={{ backgroundImage: `url(${colors.headerSvgLink})` }}>
                                <div className={styles.headerInfoLeft}>
                                    <h3>{cardData.name}</h3>
                                    <p>{cardData.title}</p>
                                </div>
                                <div className={styles.headerInfoRight}>
                                    {cardData.skills.map((skill) => {
                                        const skillString:string = skillsTypes[`${skill}`]
                                     
                                        //@ts-ignore
                                        const icon = skillsMap[`${skillString}`];
                                        
                                        return (
                                            <p key={skill} className={styles.skill}><img className={styles.iconImg} src={icon} alt={skillString}/></p>
                                        );
                                    
                                    })}
                                </div>
                            </div>
                        
                        </div>

                        <div className={styles.body}>
                            <p>{cardData.description}</p>
                        </div>

                        <img className={styles.footerSvg} src={footerSvg} alt={'footer image'} />
                        <div className={styles.footer}>
                            <p><span>XP</span> {cardData.stats.exp}</p>
                            <p>{cardData.traits.join('/')}</p>
                        </div>

                    </div>
                    
                </div>

                <div className={styles.cardBackWrapper}>
                    <img className={styles.cardBack} src={cardBack} alt={'backside of the card'} />
                </div>
        </div>
    );
}