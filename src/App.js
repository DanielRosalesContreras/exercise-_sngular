import './styles/App.css';
import Form from './components/Form';
import Result from './components/Result';
import { useState } from 'react';
const form = require('./classes/custom_form');

function App() {
  const [result, setResult] = useState('')

  const getResult = (n) => {
    setResult(form(n));
  }

  return (
    <div className="App">
      <div className="content">
        <Form getResult={getResult} />
        <Result result={`${result}`} />
      </div>
    </div>
  );
}

export default App;
