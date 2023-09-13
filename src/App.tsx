import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App: React.FC = () => {
  return (
   <div className='container mt-5'>
   <div className='card'>
     <div className='card-header'>
       <h1 className='card-title'>My Todo List</h1>
     </div>
     <div className='card-body'>
       <AddTodoForm />
       <TodoList />
     </div>
     <div className='card-footer'>
       <TotalCompleteItems />
     </div>
   </div>
 </div>
  );
};

export default App;
