import React from 'react';
import MyFooter from './MyFooter.jsx';
import { render, screen } from '@testing-library/react';

global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe('MyFooter', () => {
    test('MyFooter', async () => {
        const { container } =render(<MyFooter />)
        const footer = container.querySelector('.ant-layout-footer')
        expect(footer).toBeDefined();
    })
})