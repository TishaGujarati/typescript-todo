import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems: React.FC = () => {
  const todos = useSelector((state: any) =>
    state.todos.filter((todo: any) => todo.completed === true)
  );

  return (
    <div className='mt-3'>
      <h4>Total complete items: {todos.length}</h4>
    </div>
  );
};

export default TotalCompleteItems;
