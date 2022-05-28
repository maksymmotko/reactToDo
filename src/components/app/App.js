import { useState } from 'react';

import './App.css';
import List from '../list/List'
import Form from '../form/Form';

function App() {
    const [tasks, setTasks] = useState([{text: 'Chetotam', id: 1}, {text: 'Chtoto', id: 2}]);
    let maxId = 2;

    const addItem = (text) => {
        maxId++;
        const newItem = {
            text,            
            id: maxId
        }

        const newArr = [...tasks, newItem]
        setTasks(newArr);
    }

    const deleteItem = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    }



  return (
    <>
    <div className="App">
      <header className="header">
      <h2>Hello</h2>
      <div>Here is my to do list</div>
      </header>
    </div>
    <List
    tasks={tasks}
    onDelete={deleteItem}
    />
    <Form onAdd={addItem}/>
    </>
  );
}

export default App;
