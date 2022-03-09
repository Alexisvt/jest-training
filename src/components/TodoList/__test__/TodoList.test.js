import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../../utils/testUtils';
import TodoList from '../TodoList';

const MockTodoList = ({ initialValue = [], mockStateUpdater = null }) => {
  const todos = initialValue;
  const setTodos = mockStateUpdater;

  return (
    <TodoList todos={todos} setTodos={setTodos} />
  )
}

describe('TodoList', () => {
  test('should display a todo', () => {
    renderWithRouter(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: false }]} />)

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('tasks should not have "todo-item-active" class initially', () => {
    renderWithRouter(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: false }]} />)

    const todoItemElement = screen.getByText('test')

    expect(todoItemElement).not.toHaveClass('todo-item-active')
  })

  test('should show "todo-item-active" class when task is completed', () => {
    renderWithRouter(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: true }]} />)

    const todoItemElement = screen.getByText('test')

    expect(todoItemElement).toHaveClass('todo-item-active')
  })

  test('should change uncompleted task status to complete when clicked', () => {
    const mockFn = jest.fn();
    renderWithRouter(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: false }]} mockStateUpdater={mockFn} />)

    const todoItemElement = screen.getByText('test')
    userEvent.click(todoItemElement);

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith([{ id: 1, task: 'test', completed: true }])
  })
})