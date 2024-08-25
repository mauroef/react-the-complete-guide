import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as text', () => {
    // arrange
    render(<Greeting />);

    // act
    // ...nothing

    // assert
    const helloWOrldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWOrldElement).toBeInTheDocument();
  });
});
