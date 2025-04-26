import { mount } from 'cypress/react18';

// Make mount available globally
Cypress.Commands.add('mount', mount);
