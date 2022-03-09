import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TodoFooter from '../TodoFooter';

const MockTodoFooter = (props) => {
  return (
    <BrowserRouter>
      <TodoFooter {...props} />
    </BrowserRouter>
  )
}


describe('TodoFooter', () => {
  test('should render 2 tasks text', () => {
    // Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={2} />)

    // Act
    const footer = screen.getByText(/2 tasks left/i);

    // Assert
    expect(footer).toBeInTheDocument();
  })

  test('should render 1 task text', () => {
    // Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />)

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