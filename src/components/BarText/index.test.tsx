import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import BarText from './index';

describe('<BarText />', () => {
  const handleChangeText = jest.fn();
  test('<BarText /> snapshot', () => {
    const tree = render(
      <BarText text={''} handleChangeText={handleChangeText} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should can see Test', () => {
    const {findByText} = render(
      <BarText text={'Test'} handleChangeText={handleChangeText} />,
    );
    expect(findByText('Test')).toBeTruthy();
  });
  test('should used button', () => {
    const {getByTestId} = render(
      <BarText text={'Test'} handleChangeText={handleChangeText} />,
    );
    const button = getByTestId('clearIcon');
    fireEvent.press(button);
    waitFor(() => {
      expect(handleChangeText).toHaveBeenCalled();
    });
  });
});
