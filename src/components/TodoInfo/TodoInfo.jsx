// import { UserInfo } from './components/UserInfo/UserInfo';
// import { UserInfo } from '../UserInfo/UserInfo';
/// ///
// export const TodoInfo = ({ todo }) => (
//   <>
//     <article className="TodoInfo TodoInfo--completed">
//       <h2 className="TodoInfo__title">HTML</h2>

//       <UserInfo users={users} key={todo.id} />
//     </article>

//     <article className="TodoInfo TodoInfo--completed">
//       <h2 className="TodoInfo__title">CSS</h2>

//       <UserInfo users={users} key={todo.id} />
//     </article>

//     <article className="TodoInfo TodoInfo--completed">
//       <h2 className="TodoInfo__title">JS</h2>

//       <UserInfo users={users} key={todo.id} />
//     </article>

//     <article className="TodoInfo TodoInfo--completed">
//       <h2 className="TodoInfo__title">React</h2>

//       <UserInfo users={users} key={todo.id} />
//     </article>
//   </>
// );

// import { TodoInfo } from '../TodoInfo/TodoInfo';

// export const TodoList = ({ todos }) => (
//   <section className="TodoList">
//     {todos.map(todo => (
//       <TodoInfo todo={todo} key={todo.id} />
//     ))}
//   </section>
// );

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

