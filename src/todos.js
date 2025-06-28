// src/todos.js
export const todos = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  title: `Task ${index + 1}`,
  user: {
    id: index + 1,
    name: `User ${index + 1}`,
    username: `user${index + 1}`,
    email: `user${index + 1}@example.com`,
  },
}));
