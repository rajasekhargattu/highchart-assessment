import React from 'react';
import StackedAreaChart from './chart/StackedAreaChart';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: theme.spacing(5)
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={5}>
      <StackedAreaChart />
    </Paper>
  );
};

export default App;
