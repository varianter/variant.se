import { getEmployeesByOffice } from "./getEmployeesList";

export async function getStaticPropsEmployees() {
  // Set so we can run local as fallback.
  const employeeList = await getEmployeesByOffice("stockholm");

  if (employeeList) {
    return {
      props: {
        employeeList,
      },
      revalidate: 24 * 60 * 60,
    };
  }
  // Trigger fallback on previous version
  throw new Error();
}
