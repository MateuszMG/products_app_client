/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

import { testId, websiteUrl } from '../../../../support/helpers';

describe('add product', () => {
  beforeEach(() => {
    cy.visit(websiteUrl);
  });

  it('should redirect to "/products/add" path', () => {
    cy.get(testId('button__addProduct')).click();
    cy.location('href').should('contain', '/products/add');
  });

  it('should fill form', () => {
    cy.get(testId('button__addProduct')).click();

    cy.get(testId('input__name')).type('name');
    cy.get(testId('textarea__description')).type('desc');
    //@ts-ignore
    cy.get(testId('input__price')).clear().type(1);
    //@ts-ignore
    cy.get(testId('input__quantity')).clear().type(2);
    cy.get(testId('input__productionDate')).type('2020-11-11');
    cy.get('[data-testid^="option__"]:last').then((option) => {
      cy.get(testId('select__category')).select(option.text());
    });
  });

  it('should display toast after successfully adding product', () => {
    cy.get(testId('button__addProduct')).click();

    cy.get(testId('input__name')).type('test_name_' + new Date().toISOString());
    cy.get(testId('textarea__description')).type('desc');
    //@ts-ignore
    cy.get(testId('input__price')).clear().type(1);
    // @ts-ignore
    cy.get(testId('input__quantity')).clear().type(2);
    cy.get(testId('input__productionDate')).type('2020-11-11');
    cy.get('[data-testid^="option__"]:last').then((option) => {
      cy.get(testId('select__category')).select(option.text());
    });

    cy.get(testId('button__submit')).click();

    cy.get('#toast__addProduct').should('exist');
  });
});
