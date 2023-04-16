import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/button/Button.component.jsx';

describe('Button', () => {
  it('check onClick function is called when user click', () => {
    const handleclick = jest.fn();
    render(<Button onClick={handleclick} />);
    userEvent.click(screen.getByRole('button'));
    expect(handleclick).toBeCalledTimes(1);
  });
});
