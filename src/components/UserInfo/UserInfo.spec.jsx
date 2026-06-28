/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react18';
import { UserInfo } from './UserInfo';

describe('UserInfo', () => {
  it('should have a link with mailto user.email', () => {
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };

    mount(<UserInfo user={user} />);

    cy.get('a[href^="mailto:"]').should(
      'have.attr',
      'href',
      'mailto:Sincere@april.biz',
    );
    cy.get('a[href^="mailto:"]').should('have.text', 'Sincere@april.biz');
  });

  it('should work for another user', () => {
    const user = {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    };

    mount(<UserInfo user={user} />);

    cy.get('.UserInfo').should('contain', 'Ervin Howell');
    cy.get('a[href^="mailto:"]').should(
      'have.attr',
      'href',
      'mailto:Shanna@melissa.tv',
    );
    cy.get('a[href^="mailto:"]').should('have.text', 'Shanna@melissa.tv');
  });

  it('should render user info correctly', () => {
    const user = {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    };

    mount(<UserInfo user={user} />);

    cy.get('.UserInfo').should('contain', 'Clementine Bauch');
    cy.get('a[href^="mailto:"]').should(
      'have.attr',
      'href',
      'mailto:Nathan@yesenia.net',
    );
  });
});
