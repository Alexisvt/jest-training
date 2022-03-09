import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../../utils/testUtils';
import TodoFooter from '../TodoFooter';


describe('TodoFooter', () => {
  test('should render 2 tasks text', () => {
    // Arrange
    renderWithRouter(<TodoFooter numberOfIncompleteTasks={2} />)

    // Act
    const footer = screen.getByText(/2 tasks left/i);

    // Assert
    expect(footer).toBeInTheDocument();
  })

  test('should render 1 task text', () => {
    // Arrange
    renderWithRouter(<TodoFooter numberOfIncompleteTasks={1} />)

    // Act
    const footer = screen.getByText(/1 task left/i);

    // Assert
    expect(footer).toBeInTheDocument();
  })
})

// test('should incomplete task text to be visible', () => {
//   // Arrange
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)

//   // Act
//   const footer = screen.getByText(/1 task left/i);

//   // Assert
//   expect(footer).toBeVisible();
// })

// test('should task text to be into a p tag', () => {
//   // Arrange
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />)

//   // Act
//   const footer = screen.getByText(/1 task left/i);

//   // Assert
//   expect(footer).toContainHTML('p');
// })