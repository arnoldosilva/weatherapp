import React from 'react';
import {render} from '@testing-library/react-native'
import TitleBar from './TitleBar';

const mokedData = jest.fn()

const props = mokedData.bind({
  title: 'Hello',
  name: 'World'
})


describe('Title component', () => {
  test('should render', () => {
    render(<TitleBar {...props} />);
  });

  test('should Have a title', () => {
    const wrapper = render(<TitleBar {...props} />);
    expect(wrapper.getByTestId('title')).toBeTruthy();
  });

  test('should Have a name', () => {
    const wrapper = render(<TitleBar {...props} />);
    expect(wrapper.getByTestId('name')).toBeTruthy();
  });

})