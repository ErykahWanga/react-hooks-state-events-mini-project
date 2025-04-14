import { render, screen } from '@testing-library/react';
import NewTaskForm from '../components/NewTaskForm'; // adjust the import path based on your structure

test('renders input fields', () => {
  render(<NewTaskForm categories={['Code', 'Food']} onTaskFormSubmit={() => {}} />);
  
  // Check if the input fields are rendered
  expect(screen.getByLabelText(/Details/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Add task/i })).toBeInTheDocument();
});
