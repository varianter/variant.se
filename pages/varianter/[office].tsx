import { GetStaticPaths, GetStaticProps } from 'next';
import { EmployeeItem } from 'src/employees/types';
import { Listing, getFileListingData } from 'src/jobs/utils/getListings';
import { Office, offices } from 'src/office-selector';
import { getStaticPropsEmployees } from '../../src/employees/utils/getStaticProps';

export { default } from 'src/employees';

function queryToOffice(input?: string | string[]): Office | undefined {
  for (let office of offices) {
    if (office == input) {
      return office;
    }
  }
  return undefined;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    return {
      paths: offices.map((i) => ({ params: { office: i.toLowerCase() } })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps<{
  listings: Listing[];
  officeName: Office | null;
  employeeList: {
    revalidate: number;
    props: { employeeList: EmployeeItem[] };
  };
}> = async (context) => {
  const officeName = queryToOffice(context.params?.office);
  const employeeItem = await getStaticPropsEmployees(
    queryToOffice(context.params?.office),
  );
  const listings = await getFileListingData();
  return {
    props: {
      employeeList: employeeItem,
      listings: listings,
      officeName: officeName ?? null,
    },
  };
};
