import React from 'react';
import { act, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';

test('testing home link', () => {
  let testHistory, testLocation;
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
      <Route
        path="/"
        render={({ history, location }) => {
          testHistory = history;
          testLocation = location;
          return null;
        }}
      />
    </MemoryRouter>,
  );
});
