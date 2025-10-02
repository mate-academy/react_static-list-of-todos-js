# React Static List of TODOs

You are given `todosFromServer` and `usersFromServer` arrays with the required data.

Also each todo in the `todos` array has corresponding `user` attached (see the `App.jsx`).

Split the given `App` markup into component following the rules:

- don't change CSS class names, they are used in tests;
- `TodoList` takes the `todos` and renders one `TodoInfo` per a `todo`;
- `TodoInfo` takes a `todo` and renders its details;
- make sure that the `TodoInfo` has a `TodoInfo--completed` modifier for all completed todos;
- `UserInfo` takes a `user` and renders the details (use it only if `todo.user` exists).


Вам надано масиви `todosFromServer` та `usersFromServer` з необхідними даними.

Також до кожного завдання в масиві `todos` додано відповідного `user` (див. `App.jsx`).

Розділіть задану розмітку `App` на компоненти, дотримуючись правил:

- не змінюйте назви класів CSS, вони використовуються в тестах;
- `TodoList` приймає `todos` та відображає один `TodoInfo` на кожне `todo`;
- `TodoInfo` приймає `todo` та відображає його деталі;
- переконайтеся, що `TodoInfo` має модифікатор `TodoInfo--completed` для всіх завершених завдань;
- `UserInfo` приймає `user` та відображає деталі (використовуйте його, лише якщо існує `todo.user`).

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://ElinaMrachkovska.github.io/react_static-list-of-todos-js/) and add it to the PR description.
