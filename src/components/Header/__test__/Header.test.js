import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  test('should display Hello world', () => {
    // Arrange
    render(<Header title="Hello world" />)

    // Act
    const header = screen.getByText(/Hello world/i);

    // Assert
    expect(header).toBeInTheDocument();
  })
})