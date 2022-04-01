import React from 'react';
import {render} from '@testing-library/react-native'
import Home from './Home';

describe('Home component', () => {
  test('should render', () => {
    render(<Home />);
  });
  test('should Have a Home component', () => {
    const wrapper = render(<Home />);
    expect(wrapper.getByTestId('Home')).toBeTruthy();
  });
})