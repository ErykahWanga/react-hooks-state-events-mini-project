import { render, screen } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter'; // adjust the import path based on your structure

test('renders category buttons', () => {
  const categories = ['All', 'Code', 'Food'];
  render(<CategoryFilter categories={categories} selectedCategory="All" onCategoryChange={() => {}} />);
  
  // Check if each category button is rendered
  categories.forEach(category => {
    expect(screen.getByRole('button', { name: category })).toBeInTheDocument();
  });
});
