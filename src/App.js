// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const AddTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={AddTodo}>Add</button>
        <ul>
          {todos.map((todoItem, index) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
