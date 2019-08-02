import { Employee } from "../types/employee";

export const fetchEmployeeList = async () => {
  try {
    const result = await fetch(
      'http://localhost:3001/api/employees/all',
    );
    const data = await result.json();
    return data.employees as Employee[];
  } catch (e) {
    return [];
  }
}

export const fetchCheckIns = async () => {
  try {
    const result = await fetch(
      'http://localhost:3001/api/employees/check-ins',
    );
    const data = await result.json();
    return data.count as number;
  } catch (e) {
    return 0;
  }
}

export const checkIn = async (employeeID: number) => {
  try {
    const response = await fetch(
      'http://localhost:3001/api/employees/check-in', {
        method: 'POST',
        body: JSON.stringify({ employeeID }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) throw new Error(response.statusText);
  } catch (e) {
    throw new Error(e);
  }
}