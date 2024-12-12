import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import { getFileListingData } from 'src/jobs/utils/getListings';

export { default } from 'src/linkoping';

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData('linkoping');
    const employees = await getContactsByEmails([
      'david.dinka@variant.se'
    ]);

    return {
      props: { listings, employees },
      revalidate: 60 * 60,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { listings: [], employees: [] },
      revalidate: 60 * 60,
    };
  }
};
