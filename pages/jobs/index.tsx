import { GetStaticProps } from 'next';
import { getFileListingData, Listing } from 'src/jobs/utils/getListings';
import { Office } from 'src/office-selector';

export { default } from 'src/jobs';

export const getStaticProps: GetStaticProps<{
  listings: Listing[];
  office?: Office;
}> = async () => {
  const listings = await getFileListingData();
  return {
    props: { listings },
    revalidate: 60 * 60,
  };
};
