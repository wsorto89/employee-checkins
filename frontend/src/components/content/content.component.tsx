import React, { useEffect, useState } from 'react';

import { checkIn, fetchCheckIns, fetchEmployeeList } from '../../api-calls';
import { Employee } from '../../types/employee';
import EmployeeCard from '../employee-card/employee-card.component';
import contentStyles from './content.styles';

const Content: React.FC = () => {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const populateEmployeeList = async () => {
      const fetchedEmployeeList = await fetchEmployeeList();
      setEmployeeList(fetchedEmployeeList);
    }

    populateEmployeeList();
  }, []);

  useEffect(() => {
    const fetchCounter = async () => {
      const numCheckIns = await fetchCheckIns();
      setCounter(numCheckIns);
    }

    fetchCounter();
  });

  const clickHandler = async (employeeID: number) => {
    await checkIn(employeeID);
    const numCheckIns = await fetchCheckIns();
    setCounter(numCheckIns);
  }

  const classes = contentStyles();
  return (
    <div className={classes.content}>
      <div>Total number of check ins: {counter}</div>
      <div className={classes.list}>
        {
          employeeList.map(employee =>
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onClick={clickHandler}
            />
          )
        }
      </div>
    </div>
  );
}

export default Content;
