import './App.css';
import Graph from './Components/Graph';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Expense Tracker</h1>
      </div>
      <div className='formgraph'>
        <Form></Form>
        <Graph></Graph>
      </div>
    </div>
  );
}

export default App;
