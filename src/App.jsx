import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

// O App é o ponto de entrada. Ele pega os dados (todos) e entrega para o TodoList.
// - <TodoList /> → é um componente React que você criou (ou vai criar).Ele é responsável por renderizar uma lista de tarefas.

/* - todos={todos} → é uma prop sendo passada para esse componente.
- O lado esquerdo (todos) é o nome da prop que o TodoList espera receber.
- O lado direito ({todos}) é o valor que está sendo passado — nesse caso,
o array de tarefas que você preparou antes (com todosFromServer.map(...)).
 */

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
