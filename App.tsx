import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import BarText from '@components/BarText';
import MessageView from '@components/MessageView';

const PARENTHESES = 'p';
const BRACKETS = 'b';
const CURLY_BRACKETS = 'c';

const CHART_OPEN_PARENTHESES = '(';
const CHART_OPEN_BRACKETS = '[';
const CHART_OPEN_CURLY_BRACKETS = '{';
const CHART_CLOSE_PARENTHESES = ')';
const CHART_CLOSE_BRACKETS = ']';
const CHART_CLOSE_CURLY_BRACKETS = '}';

interface Chart {
  type: string;
  originalPosition: number;
}
const App = () => {
  const [text, setText] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [openChart, setOpenChart] = useState<Chart[]>([]);
  const [closeChart, setCloseChart] = useState<Chart[]>([]);

  useEffect(() => {
    setMessage('');

    let arrayOpen: Chart[] = [];
    let arrayClose: Chart[] = [];
    if (openChart.length > closeChart.length) {
      setMessage('Error, falta caracter de cierre');
    }
    if (openChart.length < closeChart.length) {
      setMessage('Error, falta caracter de apertura');
    }
    if (openChart.length === closeChart.length) {
      for (const index in openChart) {
        if (openChart[index].type !== closeChart[index].type) {
          arrayOpen = [...arrayOpen, openChart[index]];
          arrayClose = [...arrayClose, closeChart[index]];
        } else if (
          closeChart[index].originalPosition < openChart[index].originalPosition
        ) {
          setMessage('Error, tienes algun caracter incorrecto');
        }
      }
      const reverseCloseChart = arrayClose.reverse();
      for (const index in arrayOpen) {
        if (arrayOpen[index].type !== reverseCloseChart[index].type) {
          setMessage('Error, tienes algun caracter incorrecto');
        }
      }
    }
  }, [openChart, closeChart]);

  const handleChangeText = (t: string) => {
    setText(t);
    setOpenChart([]);
    setCloseChart([]);
    for (let index = 0; index < t.length; index++) {
      if (t[index] === CHART_OPEN_PARENTHESES) {
        setOpenChart(array => [
          ...array,
          {type: PARENTHESES, originalPosition: index},
        ]);
      }
      if (t[index] === CHART_OPEN_BRACKETS) {
        setOpenChart(array => [
          ...array,
          {type: BRACKETS, originalPosition: index},
        ]);
      }
      if (t[index] === CHART_OPEN_CURLY_BRACKETS) {
        setOpenChart(array => [
          ...array,
          {type: CURLY_BRACKETS, originalPosition: index},
        ]);
      }
      if (t[index] === CHART_CLOSE_PARENTHESES) {
        setCloseChart(array => [
          ...array,
          {type: PARENTHESES, originalPosition: index},
        ]);
      }
      if (t[index] === CHART_CLOSE_BRACKETS) {
        setCloseChart(array => [
          ...array,
          {type: BRACKETS, originalPosition: index},
        ]);
      }
      if (t[index] === CHART_CLOSE_CURLY_BRACKETS) {
        setCloseChart(array => [
          ...array,
          {type: CURLY_BRACKETS, originalPosition: index},
        ]);
      }
    }
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <BarText text={text} handleChangeText={handleChangeText} />
      <MessageView message={message} />
    </SafeAreaView>
  );
};

export default App;
