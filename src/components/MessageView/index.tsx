import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface Props {
  message: string;
}
function MessageView({message}: Props) {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
}
export default MessageView;
