import { useState, useContext } from "react";
import transactionContext from "../utilities/transactionContext";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',

        },
    },
}));

function Transaction() {
    const classes = useStyles();

    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    let {addTransaction} = useContext(transactionContext);

    const handleAdditon = (e) => {
        e.preventDefault();
        console.log(newAmount,newDesc);
        addTransaction({
            amount: parseInt(newAmount),
            desc: newDesc,
        })
    }

    return (
        <div>
            <h1>Transaction</h1>
            <form onSubmit={handleAdditon} className={classes.root} autoComplete="off">
                <TextField id="outlined-basic" required
                    label="Enter Discription"
                    variant="outlined"
                    type="text"
                    onChange={(e) => { setDesc(e.target.value) }}
                />
                <br />
                <TextField id="outlined-basic" required
                    label="Enter Amount"
                    variant="outlined"
                    type="number"
                    onChange={(e) => { setAmount(e.target.value) }}
                />
                <br />
                <Button type="submit" variant="contained">Add Transaction</Button>
            </form>
        </div >
    );
}

export default Transaction;
