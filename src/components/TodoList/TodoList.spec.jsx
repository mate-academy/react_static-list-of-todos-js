/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from 'cypress/react'; // або cy.mount, якщо так в тебе
import { TodoList } from './TodoList';

const user1 = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
};

const user2 = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
};

const todosMock = [
  {
    userId: 1,
    id: 1,
    title: 'First Todo',
    completed: false,
    user: user1,
  },
  {
    userId: 1,
    id: 2,
    title: 'Second Todo',
    completed: false,
    user: user1,
  },
  {
    userId: 2,
    id: 3,
    title: 'Third Todo',
    completed: false,
    user: user2,
  },
  {
    userId: 2,
    id: 4,
    title: 'Fourth Todo',
    completed: true,
    user: user2,
  },
];

describe('TodoList', () => {
  it('should contain all the todos', () => {
    mount(<TodoList todos={todosMock} users={[user1, user2]} />);

    cy.get('.TodoInfo').should('have.length', 4);
  });

  it('should render todos in the correct order', () => {
    mount(<TodoList todos={todosMock} users={[user1, user2]} />);

    cy.get('.TodoInfo__title').eq(0).should('have.text', 'First Todo');
    cy.get('.TodoInfo__title').eq(3).should('have.text', 'Fourth Todo');
  });

  it('should render no todos if received an empty array', () => {
    mount(<TodoList todos={[]} users={[]} />);

    cy.get('.TodoInfo').should('not.exist');
  });
});
