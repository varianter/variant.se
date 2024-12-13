import { EmployeeItem } from "src/employees/types";

const BASE_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

export async function requestEmployees(): Promise<EmployeeItem[] | undefined> {
  
  const request = await fetch(`${BASE_URL}/employees?country=se`);
  

  if (!request.ok) {
    return undefined;
  }
  return (await request.json()).employees as EmployeeItem[];
}

export async function requestByEmails(
  emails: string[]
): Promise<EmployeeItem[]> {
  const employeeList = await requestEmployees();

  if (!employeeList) {
    return [];
  }
  
  const employee = employeeList.filter((e) => emails.includes(e.email));
  return employee;
}
