import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddInput from '../AddInput';

const setTodos = jest.fn();

describe('AddInput', () => {
  test('should render an input element', () => {
    render(<AddInput setTodos={setTodos} todos={[]} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should add a todo', () => {
    render(<AddInput setTodos={setTodos} todos={[]} />);

    userEvent.type(screen.getByRole('textbox'), 'new todo');
    userEvent.click(screen.getByRole('button'));

    expect(setTodos).toHaveBeenCalled();
    expect(setTodos.mock.calls[0][0].length).toBe(1);
    expect(setTodos.mock.calls[0][0][0].task).toBe('new todo');
  });

  test('should clear input text once the todo has added to the list', () => {
    render(<AddInput setTodos={setTodos} todos={[]} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');

    userEvent.click(screen.getByRole('button'));
    expect(input).toHaveValue('');
  });
});
