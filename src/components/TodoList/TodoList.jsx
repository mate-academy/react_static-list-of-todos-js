import PropTypes from 'prop-types';
import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos && todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
