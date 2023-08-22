import PropTypes from 'prop-types';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {Array.isArray(todos) && todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
