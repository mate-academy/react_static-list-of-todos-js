import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos = [], users = [] }) =>
  todos.length === 0
    ? null
    : todos.map(todo => <TodoInfo key={todo.id} todo={todo} users={users} />);
