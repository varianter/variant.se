export { default } from '../../src/ee';
import { data } from 'src/ee/data';
import { CardData } from "src/ee/types";

interface props {
    req: any,
    res: any,
  }
  
  export const getServerSideProps = async ({ req, res }:props) => {

    const cardData: CardData[] = data;
  
    return {
      props: {
        employeeCardData:cardData
      },
    };
  };