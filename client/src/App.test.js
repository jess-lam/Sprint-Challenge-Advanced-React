import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import {getByText} from '@testing-library/dom'
import App from './App';

test("rtl renders without crashing", () => {
  render(<App />);
});

test("contains PlayerCard div", () => {
  // ARRANGE
  const container = document;
  //const getByText = container.getAllByText;

  // ACT

  const playerCardExists= container.getElementById("player-card")

  // ASSERT
  expect(playerCardExists).toBeInTheDocument
});


test("contains Players Ranked by Internet Search title", () => {
const {getByTestId} = render(<App />);

getByTestId("sub-title");
});

test("toggles Dark Mode", () => {
  // ARRANGE
  const container = document.body;
  //const getByText = container.getAllByText;

  // ACT

  const toggleDarkModeExists= container.getElementById("dark-mode")

  // ASSERT
  expect(toggleDarkModeExists).toBeInTheDocument
});