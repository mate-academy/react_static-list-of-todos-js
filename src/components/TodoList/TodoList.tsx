import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': todo.completed,
          },
        )}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
