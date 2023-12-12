import { GetStaticPaths, GetStaticProps } from 'next';
import {
  tjenesteomradePath,
  TjenesteomradeProps,
} from 'src/tjenesteomrader/utils/tjenesteomradeTypes';
import { getMarkdownObjectServiceAreas } from '../../../src/tjenesteomrader/utils/markdownFunctions';

export { default } from 'src/tjenesteomrader/areas';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tjenesteomradePath.map((omrade) => ({
    params: { omrade },
  }));
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TjenesteomradeProps> = async (
  context,
) => {
  if (context?.params!.omrade) {
    const filePath = context?.params!.omrade.toString();
    const markdown = await getMarkdownObjectServiceAreas(filePath);
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
