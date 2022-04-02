import React from 'react';
import {render} from '@testing-library/react-native'
import Temperature from './Temperature';

const mokedData = jest.fn()

const props = mokedData.bind({
  temperature: '23'
})

describe('Title component', () => {
  test('should render', () => {
    render(<Temperature {...props} />);
  });

  test('should Have a title', () => {
    const wrapper = render(<Temperature {...props} />);
    expect(wrapper.getByTestId('Temperature')).toBeTruthy();
  });


})