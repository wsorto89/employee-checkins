import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const Title: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Bentley's Company</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Title;
