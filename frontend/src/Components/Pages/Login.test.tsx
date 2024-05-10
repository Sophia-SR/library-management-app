import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LogInForm from '../Login';

describe('LogInForm', () => {
    const onSubmitMock = jest.fn();
    const onSignUpMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders email and password inputs', () => {
        render(<LogInForm onSubmit={onSubmitMock} onSignUp={onSignUpMock} />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test('enables submit button when email and password are provided', () => {
        render(<LogInForm onSubmit={onSubmitMock} onSignUp={onSignUpMock} />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: 'Sign in' });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        expect(submitButton).not.toBeDisabled();
    });

    test('calls onSubmit with email and password when form is submitted', () => {
        render(<LogInForm onSubmit={onSubmitMock} onSignUp={onSignUpMock} />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: 'Sign in' });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);

        expect(onSubmitMock).toHaveBeenCalledWith('test@example.com', 'password');
    });

    test('calls onSignUp when Sign Up button is clicked', () => {
        render(<LogInForm onSubmit={onSubmitMock} onSignUp={onSignUpMock} />);
        const signUpButton = screen.getByRole('button', { name: 'Sign Up' });

        fireEvent.click(signUpButton);

        expect(onSignUpMock).toHaveBeenCalled();
    });
});
