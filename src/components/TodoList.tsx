import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync() as any);
  }, [dispatch]);

  return (
    <ul className='list-group'>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
