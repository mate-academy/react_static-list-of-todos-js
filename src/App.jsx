// Перевірте чи є такий код для завантаження даних:
import React, { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';

export function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosResponse = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const todosData = await todosResponse.json();

        setTodos(todosData);

        const usersResponse = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const usersData = await usersResponse.json();

        setUsers(usersData);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (todos.length === 0 || users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <TodoList todos={todos} users={users} />
    </div>
  );
}
