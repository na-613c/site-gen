import React from 'react';
import Login from './Login.jsx';
import { render, screen } from '@testing-library/react';

global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe('Loader', () => {
    test('Loader', async () => {
        render(<Login />)
        expect(screen.getByText(/Для создания сайта Вам надо зарегистрироваться/i)).toBeDefined();
    })
})