import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {mediumGray} from '@constants/colors';

import clearIcon from './assets/ic_close.png';
import styles from './styles';

interface Props {
  text: string;
  handleChangeText: (t: string) => void;
}

function BarText({text, handleChangeText}: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.barText, styles.barTextShadow]}>
        <TextInput
          style={styles.inputStyle}
          placeholder={'ingrese el texto aquí'}
          placeholderTextColor={mediumGray}
          onChangeText={handleChangeText}
          value={text}
          testID="input"
        />
        {text.length > 0 && (
          <TouchableOpacity
            testID={'clearIcon'}
            onPress={() => handleChangeText('')}>
            <Image
              source={clearIcon}
              resizeMode="contain"
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
export default BarText;
