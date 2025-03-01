const todosFromServer = [
  { id: 1, title: 'Learn React', completed: true, userId: 1 },
  { id: 2, title: 'Develop Todo App', completed: false, userId: 2 },
  { id: 3, title: 'Test Application', completed: true, userId: 1 },
  // Add more todos if needed
];

const usersFromServer = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // Add more users if needed
];

// Attach users to todos
todosFromServer.forEach(todo => {
  todo.user = usersFromServer.find(user => user.id === todo.userId);
});
