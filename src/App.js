import React,{useState,useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/Todolistview';
import axios from 'axios';
function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')

  const addTodoHandler = () => {
    const url = 'http://localhost:8000/api/todo';
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const data = {
      title: title,
      description: desc
    };
  
    axios.post(url, data, { headers })
      .then(response => {
        console.log(response.data);
  
        // Update the todoList state with the new task
        setTodoList(prevTodoList => [...prevTodoList, response.data]);
        
        // Clear the input fields
        setTitle('');
        setDesc('');
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };

// ...

  return (
      <div className='App list group-item justify-content-center align-items-center mx-auto'
      style={{'width':'400px','background':'white','marginTop':'15px'}}>
<h1 className="card text-white bg-primary mb-1" style={{ "max-width": "20rem;", 'background': '#1880E8' }}>
  Dahyun+Darwin
</h1>
<h3 className="card text-white bg-primary mb-3" >
  fastapi nodejs python
</h3>
<div className='card-body'>


<h4 className='card text-white mb-1' style={{ "max-width": "20rem;", 'background': 'rgb(0,0,0)' }}>
  Add your Task
</h4>
<span className='text'>
<input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/> 
<input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
<button className='btn btn-outline-primary mx-2 mb-3'style={{'borderRadius':'50px','font-weight':'bold'}} onClick={addTodoHandler}> Add Task</button>

</span>
<h5 className="card text-white bg-dark mb-3">Your Tasks</h5>



<div>
  <TodoView todoList={todoList} updateTodoList={setTodoList} />
</div>
d
</div>
<h6 className="card text-white bg-dark mb-3" style={{ 'background': 'black', 'color': 'white', 'py': '1', 'mb': '0' }}>
  Copyright 2021, All rights reserved &copy;
</h6>

</div>
  );
}

export default App;
