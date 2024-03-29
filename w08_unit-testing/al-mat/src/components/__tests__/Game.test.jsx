import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../Game';

test('change cheat state when clicking the robot', () => {
  const { getByTestId } = render(<Game />);
  const robotIcon = getByTestId('robot-icon');

  fireEvent.click(robotIcon);
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(robotIcon);
  expect(robotIcon).not.toHaveClass('cheating');

  // console.log('renderObject', renderObject);
});
