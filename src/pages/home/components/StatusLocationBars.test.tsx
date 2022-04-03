import React from 'react';
import {render, waitFor, } from '@testing-library/react-native'
import StatusLocationBar from './StatusLocationBar';
import App from '../../../../App'
import {create, act} from 'react-test-renderer';

const mokedData = jest.fn()

let tree: any

tree = create(<App />)
waitFor(() => {
  act(() => {
    tree.update()
  })
}, {timeout: 2000})

console.log(tree.toJSON())


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
}
)

