import { EmployeeItem } from 'src/employees/types';
import { getStaticPropsEmployees } from '../../src/employees/utils/getStaticProps';
import { getFileListingData, Listing } from '../../src/jobs/utils/getListings';
import { Office } from 'src/office-selector';

export { default } from 'src/employees';

export const getStaticProps: () => Promise<{
  props: {
    listings: Listing[];
    officeName: Office | null;
    employeeList: {
      revalidate: number;
      props: { employeeList: EmployeeItem[] };
    };
  };
}> = async () => {
  const employeeItem = await getStaticPropsEmployees();
  const listings = await getFileListingData();
  return {
    props: {
      employeeList: employeeItem,
      listings: listings,
      officeName: null,
    },
  };
};
