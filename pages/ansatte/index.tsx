import { GetStaticProps } from "next";
import { EmployeeItem } from "src/employees/types";
import { getStaticPropsEmployees } from "../../src/employees/utils/getStaticProps";

export { default } from "src/employees";

export const getStaticProps: GetStaticProps<{
  employeeList: EmployeeItem[];
}> = async () => {
  return await getStaticPropsEmployees();
};
