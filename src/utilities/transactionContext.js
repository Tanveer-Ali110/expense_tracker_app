import { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer.js'

const initialTransaction = [
    
    { desc: "Sample", amount: 10 },
    
];

const transactionContext = createContext(initialTransaction);

export default transactionContext;

export const ContextProvier=({children})=>{

    let [state,dispatch] = useReducer(TransactionReducer,initialTransaction);

    function addTransaction(transOjb){
        console.log("after",transOjb);
        dispatch({
            type:"Add_Transaction",
            payload:{
                amount:transOjb.amount,
                desc: transOjb.desc,
            },
        })
    }

    return(
        <transactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
        {children}
        </transactionContext.Provider>
    )

}
