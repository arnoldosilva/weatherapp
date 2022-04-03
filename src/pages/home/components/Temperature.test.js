import React from 'react';
import {render} from '@testing-library/react-native'
import Temperature from './Temperature';


const props = {
  temperature:'23.9'
}

describe('Title component', () => {
  test('should render', () => {
    render(<Temperature {...props}/>);
  });

  test('should Have a title', () => {
    const wrapper = render(<Temperature {...props} />);
    expect(wrapper.getByTestId('Temperature')).toBeTruthy();
  });


})