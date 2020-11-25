import Balance from './balanceAccount';
import Transaction from './transaction';
import History from './history';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '5px auto',
    maxWidth: "1000px",
    backgroundColor: '#cfe8fc',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  header:{
    padding: theme.spacing(2),
    margin:"auto",
    textAlign:'center',
  }
}));

function ExpenseTracker() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <h1 className={classes.header}>Expense Tracker</h1>
        <Divider/>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><Balance /></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><Transaction /></Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}><History /></Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ExpenseTracker;
