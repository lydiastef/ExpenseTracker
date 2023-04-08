import './App.css';
import Graph from './Components/Graph';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Expense Tracker</h1>
      </div>
      <Graph></Graph>
      <Form></Form>
    </div>
  );
}

export default App;
