import React from 'react';

import { render } from '@testing-library/react-native';

import HomeScreen from '../home/index';

test('renders "Home page" text', () => {
    const { getByText } = render(<HomeScreen />);
    const helloText = getByText('Home page');
    expect(helloText).toBeDefined();
});