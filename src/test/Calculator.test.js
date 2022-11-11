import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../pages/Calculator';

describe('Testing', () => {
  test('See if is the number is adding', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', {
      name: /4/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: '+',
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /6/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /=/,
    }));
    const element = screen.getByTestId('testH2').innerHTML;
    expect(element).toBe('10');
  });

  it('See if the result of the operation 4-6 is -2', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', {
      name: /4/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: '-',
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /6/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /=/,
    }));
    const element = screen.getByTestId('testH2').innerHTML;
    expect(element).toBe('-2');
  });

  it('See if the result of the operation 6*6 is 24', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', {
      name: /6/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: 'x',
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /6/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /=/,
    }));
    const element = screen.getByTestId('testH2').innerHTML;
    expect(element).toBe('36');
  });

  it('See if the result of the operation 46/6 is 7.666', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', {
      name: /4/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /6/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: '÷',
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /6/,
    }));
    await userEvent.click(screen.getByRole('button', {
      name: /=/,
    }));
    const element = parseFloat(screen.getByTestId('testH2').innerHTML, 10).toFixed(3);
    expect(element).toBe('7.667');
  });
});