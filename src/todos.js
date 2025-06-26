export const todos = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  title: `Task ${index + 1}`,
  user: {
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
  },
}));
