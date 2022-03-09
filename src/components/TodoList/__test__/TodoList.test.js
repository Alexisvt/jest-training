import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import TodoList from '../TodoList';

const MockTodoList = ({ initialValue = [] }) => {
  const [todos, setTodos] = useState(initialValue);

  return (

    <BrowserRouter>
      <TodoList todos={todos} setTodos={setTodos} />
    </BrowserRouter>
  )
}

describe('TodoList', () => {
  test('should display a todo', () => {
    render(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: false }]} />)

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('task should not have "todo-item-active" class initially', () => {
    render(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: false }]} />)

    const todoItemElement = screen.getByText('test')

    expect(todoItemElement).not.toHaveClass('todo-item-active')
  })

  test('Completed task should have "todo-item-active" class', () => {
    render(<MockTodoList initialValue={[{ id: 1, task: 'test', completed: false }]} />)

    const todoItemElement = screen.getByText('test')
    userEvent.click(todoItemElement);

    expect(todoItemElement).toHaveClass('todo-item-active')

  })
})