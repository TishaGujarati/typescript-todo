import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const resp = await fetch('http://localhost:7000/todos');
    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (payload: { title: string }) => {
    const resp = await fetch('http://localhost:7000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: payload.title }),
    });  

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  'todos/completeTodoAsync',
  async (payload: { id: string; completed: boolean }) => {
    const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const todo: Todo = {
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action: PayloadAction<{ id: string; completed: boolean }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled.type]: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled.type]: (state, action: PayloadAction<{ todo: Todo }>) => {
      state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled.type]: (state, action: PayloadAction<{ todo: Todo }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.todo.id);
      state[index].completed = action.payload.todo.completed;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
