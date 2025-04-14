import { render, screen } from '@testing-library/react';
import Task from '../components/Task'; // adjust the import path based on your structure

test('renders task text and category', () => {
  render(<Task text="Buy rice" category="Food" onDeleteTask={() => {}} />);
  
  // Check if task text and category appear in the document
  expect(screen.getByText("Buy rice")).toBeInTheDocument();
  expect(screen.getByText("Food")).toBeInTheDocument();
  
  // Check if the delete button is present
  expect(screen.getByRole("button", { name: "X" })).toBeInTheDocument();
});
