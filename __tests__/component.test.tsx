import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/initial state/i)).toBeInTheDocument();
  });

  test('handles user interaction to trigger action', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: true }).mockResolvedValueOnce({ data: 'some data' });
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());

    const resultElement = await screen.findByText(/some data/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('handles error state', async () => {
    const useExternalData = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'));
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());

    const errorElement = await screen.findByText(/failed to fetch/i);
    expect(errorElement).toBeInTheDocument();
  });

  test('renders loading state', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: true });
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());

    const loadingElement = screen.getByRole('status', { name: /loading.../i });
    expect(loadingElement).toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    
    const button = screen.getByRole('button', { name: /trigger action/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveFocus(); // Assuming the component should focus on this element after interaction
  });

  test('mocks external dependencies correctly', () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: 'some data' });
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/initial state/i)).toBeInTheDocument();
  });

  test('handles user interaction to trigger action', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: true }).mockResolvedValueOnce({ data: 'some data' });
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());

    const resultElement = await screen.findByText(/some data/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('handles error state', async () => {
    const useExternalData = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'));
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());

    const errorElement = await screen.findByText(/failed to fetch/i);
    expect(errorElement).toBeInTheDocument();
  });

  test('renders loading state', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: true });
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());

    const loadingElement = screen.getByRole('status', { name: /loading.../i });
    expect(loadingElement).toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    
    const button = screen.getByRole('button', { name: /trigger action/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveFocus(); // Assuming the component should focus on this element after interaction
  });

  test('mocks external dependencies correctly', () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: 'some data' });
    (CoreFunctionalityComponent as any).useExternalData = useExternalData;

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/trigger action/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());
  });
});