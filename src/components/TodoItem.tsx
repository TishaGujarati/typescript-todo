import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id: id.toString(), completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id.toString() })); 
  };

  return (
   <li className={`list-group-item ${completed ? 'list-group-item-success' : ''}`}>
      <div className='d-flex justify-content-between'>
        <label className='form-check-label d-flex align-items-center'>
          <input
            type='checkbox'
            className='form-check-input'
            onClick={handleCheckboxClick}
            checked={completed}
          />
          {title}
        </label>
        <button onClick={handleDeleteClick} className='btn btn-danger'>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
