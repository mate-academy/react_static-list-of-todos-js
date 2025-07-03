/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react18';
import { UserInfo } from './UserInfo';

describe('UserInfo', () => {
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

  it('should show a user.name', () => {
    mount(<UserInfo user={user1} />);

    cy.get('.UserInfo__name').eq(0).should('have.text', 'Leanne Graham');
  });

  it('should have a link with mailto: user.email', () => {
    mount(<UserInfo user={user1} />);

    cy.get('.UserInfo__email')
      .should('have.attr', 'href', `mailto:${user1.email}`)
      .and('contain', user1.email);
  });

  it('should work for another user', () => {
    mount(<UserInfo user={user2} />);

    cy.get('.UserInfo__name').should('have.text', 'Ervin Howell');
    cy.get('.UserInfo__email')
      .should('have.attr', 'href', `mailto:${user2.email}`)
      .and('contain', user2.email);
  });
});
