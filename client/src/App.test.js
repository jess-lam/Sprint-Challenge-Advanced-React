import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test("rtl renders without crashing", () => {
  render(<App />);
});

test("contains Megan Rapinoe Playercard", () => {
  // ARRANGE
  const expectedMeganRapinoeElement = 1;
  const container = render(<App />);
  const getByText = container.getByText;

  // ACT

  const meganRapinoeElement = getByText(/megan rapinoe/i);

  // ASSERT
  expect(meganRapinoeElement.length).toBe(expectedMeganRapinoeElement);
});
