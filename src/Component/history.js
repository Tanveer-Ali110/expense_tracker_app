import React, { useContext } from 'react';
import transactionContext from '../utilities/transactionContext';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        display:'flex',
        justifyContent:'space-between',
        marginTop: '5px',
        background: '#e7e7e9',

    }
}));

function History() {
    const classes = useStyles();

    let {transactions} = useContext(transactionContext);
    return (
        <div>
            <h1>History</h1>
            <List className={classes.root} >
                {
                    transactions.map((transObj, ind) => {
                        return (
                            <ListItem key={ind} className={classes.list}>
                                <span>{transObj.desc}</span>
                                <span>{transObj.amount}</span>
                            </ListItem>

                        )
                    })
                }
            </List>
        </div>
    );
}

export default History;
