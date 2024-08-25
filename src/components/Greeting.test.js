import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as text', () => {
    // arrange
    render(<Greeting />);

    // act
    // ...nothing

    // assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.getByText('Changed');
    expect(outputElement).toBeInTheDocument();
  });

  test('does NOT render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
