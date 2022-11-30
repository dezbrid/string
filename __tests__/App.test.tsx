/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

describe('<App />', () => {
  test('renders correctly', () => {
    renderer.create(<App />);
  });
  test('<App /> snapshot', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Should apply the value when changing text (', () => {
    const {getByTestId, findByText} = render(<App />);
    const input = getByTestId('input');
    fireEvent.changeText(input, '(');
    expect(input.props.value).toBe('(');
    expect(findByText('Error, falta caracter de cierre')).toBeTruthy();
  });
  test('Should apply the value when changing text )', () => {
    const {getByTestId, findByText} = render(<App />);
    const input = getByTestId('input');
    fireEvent.changeText(input, ')');
    expect(input.props.value).toBe(')');
    expect(findByText('Error, falta caracter de apertura')).toBeTruthy();
  });
  test('Should apply the value when changing text )(', () => {
    const {getByTestId, findByText} = render(<App />);
    const input = getByTestId('input');
    fireEvent.changeText(input, ')(');
    expect(input.props.value).toBe(')(');
    expect(findByText('Error, tienes algun caracter incorrecto')).toBeTruthy();
  });
  test('Should apply the value when changing text ({])', () => {
    const {getByTestId, findByText} = render(<App />);
    const input = getByTestId('input');
    fireEvent.changeText(input, '({])');
    expect(input.props.value).toBe('({])');
    expect(findByText('Error, tienes algun caracter incorrecto')).toBeTruthy();
  });
});
