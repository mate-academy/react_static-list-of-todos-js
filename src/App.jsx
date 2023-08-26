import './App.scss';
import { TodoList } from './components/TodoList';

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <section className="TodoList">
      <TodoList />
    </section>
  </div>
);
