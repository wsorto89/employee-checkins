import React from 'react';

import { Card, CardMedia, Typography } from '@material-ui/core';

import { Employee } from '../../types/employee';
import employeeCardStyles from './employee-card.styles';

const EmployeeCard: React.FC<{ employee: Employee, onClick: (id: number) => void }> = (props) => {
  const employee = props.employee;
  const onClick = async () => {
    props.onClick(employee.id);
  }

  const classes = employeeCardStyles();
  return (
    <Card className={classes.card} onClick={onClick}>
      <CardMedia image={employee.url} title="Profile Pic" className={classes.media} />
      <Typography>{employee.name}</Typography>
    </Card>
  );
}

export default EmployeeCard;
