import React from 'react';
import App from '../App';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';
import { render, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';

function renderWithRouter(UI, { route = '/', history = createHistory(createMemorySource(route)) } = {}) {
  return {
    ...render(<LocationProvider history={history}>{(context) => <UI {...context} />}</LocationProvider>),
    history,
  };
}
describe('Routes', () => {
  /**
   * @test
   */
  it('should render home page', () => {
    const { queryByText } = renderWithRouter(App);
    expect(queryByText('Home')).not.toBeNull();
  });

  /**
   * @test
   */
  //   it('should not show protected routes', async () => {
  //     const { queryByText, debug } = renderWithRouter(App, {
  //       route: '/dashboard',
  //     });
  //     await waitForElement(() => queryByText(/protected/i));
  //     debug();
  //     // fails from this line onwards
  //     await waitForElementToBeRemoved(() => queryByText(/protected/i));
  //     await waitForElement(() => queryByText(/not authenticated/i));
  //   });
});
