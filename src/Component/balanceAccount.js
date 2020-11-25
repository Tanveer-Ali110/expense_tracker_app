import { useContext } from 'react';
import transactionContext from '../utilities/transactionContext';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px auto',
    padding: '0px 10px',
    backgroundColor: '#cfe8fc',
  },
}));

function BalanceInfo() {
  const classes = useStyles();

  let { transactions } = useContext(transactionContext);

  const Income = () => {
    let value = 0;

    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        value = value + transactions[i].amount;
      }
    }
    return value;
  }
  const Expense = () => {
    let value = 0;

    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        value = value + transactions[i].amount;
      }
    }
    return value;
  }

  const Balance = () => {
    let value = 0;
    value = Income() + Expense();
    return value;
  }


  return (
    <div>
      <h1>Balance</h1>
      <Box className={classes.root}>
        <h2> Balance Amount <br />${Balance()}</h2>
      </Box>
      <br />
      <Box className={classes.root} m={1}>
        <h4>Income <br />${Income()}</h4>
        <h4>Expense <br />${Expense()}</h4>
      </Box>
    </div>
  );
}

export default BalanceInfo;
