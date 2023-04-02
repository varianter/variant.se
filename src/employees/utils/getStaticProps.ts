import { getContactsByEmails, getEmployeesByOffice } from "./getEmployeesList";

export async function getStaticPropsEmployees() {
  // Set so we can run local as fallback.
  const employeeList = await getEmployeesByOffice("stockholm");
  const extraEmployee = await getContactsByEmails(["mb@variant.no"]);

  if (employeeList) {
    return {
      props: {
        employeeList: employeeList.concat(extraEmployee),
      },
      revalidate: 24 * 60 * 60,
    };
  }
  // Trigger fallback on previous version
  throw new Error();
}
