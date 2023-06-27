import React from 'react';

import { render } from '@testing-library/react-native';

import Desk from '../../desk/index';

test('renders "Desk screen" text', () => {
    const { getByText } = render(<Desk />);
    const helloText = getByText('Desk screen');
    expect(helloText).toBeDefined();
});
