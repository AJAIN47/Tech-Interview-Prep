import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from '../Filters';

describe('Filters Component', () => {
  const mockOnFilterChange = jest.fn();


  test('renders filter button and options', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);
    
    // Check filter button
    const filterButton = screen.getByRole('button', { name: /filters/i });
    expect(filterButton).toBeInTheDocument();
    
    // Check filter options are not visible initially
    expect(screen.queryByText('Question Types')).not.toBeInTheDocument();
    expect(screen.queryByText('Interview Duration')).not.toBeInTheDocument();
  });

  test('handles question type selection', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);
    
    // Open filters
    const filterButton = screen.getByRole('button', { name: /filters/i });
    fireEvent.click(filterButton);
    
    // Check options are visible
    expect(screen.getByText('Question Types')).toBeInTheDocument();
    expect(screen.getByText('Interview Duration')).toBeInTheDocument();
    
    // Select a question type
    const codingCheckbox = screen.getByLabelText('Coding');
    fireEvent.click(codingCheckbox);
    
    // Verify filter change was called
    expect(mockOnFilterChange).toHaveBeenCalledWith({
      questionTypes: ['Coding'],
      interviewDuration: null
    });
  });

  test('handles interview duration selection', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);
    
    // Open filters
    fireEvent.click(screen.getByRole('button', { name: /filters/i }));
    
    // Select duration
    fireEvent.click(screen.getByText('3-5 weeks'));
    
    // Verify duration was selected
    expect(mockOnFilterChange).toHaveBeenCalledWith({
      questionTypes: [],
      interviewDuration: '3-5 weeks'
    });
  });

  test('matches snapshot', () => {
    const { container } = render(<Filters onFilterChange={mockOnFilterChange} />);
    expect(container).toMatchSnapshot();
  });
});
