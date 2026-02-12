import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { todosFromServer } from './api/todos';
import { usersFromServer } from './api/users';
const todos = todosFromServer.map(todo => ({ ...todo, user: usersFromServer.find(user => user.id === todo.userId), }));
export const App = () => ( <div className="App">
<TodoList todos={todos} />
</div>);

