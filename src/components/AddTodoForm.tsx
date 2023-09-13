import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value }));
      setValue('');
    }
  };

  return (
    <form onSubmit={onSubmit} className='mb-3'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Add todo...'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className='input-group-append'>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
