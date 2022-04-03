import React from 'react';
import {render} from '@testing-library/react-native'
import StatusLocationBar from './StatusLocationBar';


const mokedData = jest.fn()

const props = mokedData.bind({
  height: 1280
})

describe('Title component', () => {
  test('should render', () => {
    render(<StatusLocationBar {...props} />);
  });

  test('should Have a title', () => {
    const wrapper = render(<StatusLocationBar {...props} />);
    expect(wrapper.getByTestId('StatusLocationBar')).toBeTruthy();
  });

})

describe('Buttom component', () => {
  test('should have a refresh buttom', () => {
    const wrapper = render(<StatusLocationBar {...props} />);
    expect(wrapper.getByTestId('RefreshPositionButtom')).toBeTruthy();
  });


  test('should have a loading indicator', () => {
    const wrapper = render(<StatusLocationBar {...props} />);
    expect(wrapper.getByTestId('RefreshPositionButtom')).toBeTruthy();
  })

})

