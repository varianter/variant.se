import { GetStaticPaths, GetStaticProps } from 'next';
import {
  offerPath,
  OfferProps,
} from '../../../../../src/tjenesteomrader/offers/utils/offerTypes';
import { getMarkdownObject } from '../../../../../src/tjenesteomrader/offers/utils/offerFunctions';
import { tjenesteomradePath } from '../../../../../src/tjenesteomrader/utils/tjenesteomradeTypes';

export { default } from 'src/tjenesteomrader/offers';

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = offerPath.map((offer) => ({
  //   params: { offer },
  // }));
  const paths = tjenesteomradePath.flatMap((omrade) =>
    offerPath.map((offer) => ({
      params: { omrade, offer },
    })),
  );
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<OfferProps> = async (context) => {
  if (context?.params!.offer) {
    const filePath = context?.params!.offer.toString();
    const markdown = await getMarkdownObject(filePath);
    return {
      props: {
        fileContents: markdown.fileContents,
        name: markdown.name,
        color: markdown.color,
        category: markdown.category,
      },
    };
  }

  return {
    notFound: true,
  };
};
