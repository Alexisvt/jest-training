import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../../utils/testUtils';
import Todo from '../Todo';


describe('Todo', () => {
  test('should display a header with a "todo" text content', () => {
    renderWithRouter(<Todo />);

    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Todo');
  })

  test('should add and display a todo', () => {
    renderWithRouter(<Todo />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'new todo');
    userEvent.click(screen.getByRole('button'));
    const todoDivContainer = screen.getByText('new todo');

    expect(input).toHaveValue('');
    expect(todoDivContainer).toBeInTheDocument();
  })

  test('should display "2 tasks left" when adding a new todo', () => {
    renderWithRouter(<Todo />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button')

    userEvent.type(input, 'new todo');
    userEvent.click(button);

    userEvent.type(input, 'new todo 2');
    userEvent.click(button);

    const footer = screen.getByText(/2 tasks left/i);

    expect(footer).toBeInTheDocument();
  })

  test('When click a task should have "todo-item-active" class', () => {
    renderWithRouter(<Todo />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Add' });

    userEvent.type(input, 'new todo');
    userEvent.click(button);

    const todoItem = screen.getByText('new todo');
    userEvent.click(todoItem);

    expect(todoItem).toHaveClass('todo-item-active');
  })
})