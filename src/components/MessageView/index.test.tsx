import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import MessageView from './index';

describe('<MessageView />', () => {
  test('<MessageView /> snapshot', () => {
    const tree = render(<MessageView message="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should to see message Test', () => {
    const {findByText} = render(<MessageView message="Test" />);
    expect(findByText('Test')).toBeTruthy();
  });
});
