import React from 'react';
import Loader from './Loader.jsx';
import { render} from '@testing-library/react';



describe('Loader', () => {
    test('Loader', async () => {
        const { container } = render(<Loader />)
        const arrow =  container.querySelector('.lds-hourglass')
        expect(arrow).toBeDefined();
    })
})
