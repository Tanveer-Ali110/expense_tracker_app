import ExpenseTracker from './Component/expenseTracker';
import {ContextProvier} from "./utilities/transactionContext";
function App() {
  return (
    <div>
      <ContextProvier>
        <ExpenseTracker />
      </ContextProvier>
    </div>
  );
}

export default App;
