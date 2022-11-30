import {StyleSheet} from 'react-native';
import {extraLightGray, white} from '@constants/colors';
import {GENERAL_BOX_SHADOW} from '@constants/commonStyles';

const CLEAR_ICON_SIZE = 18;

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  barText: {
    alignItems: 'center',
    backgroundColor: white,
    height: 45,
    borderRadius: 20,
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
  },
  clearIcon: {
    width: CLEAR_ICON_SIZE,
    height: CLEAR_ICON_SIZE,
  },
  barTextShadow: {
    ...GENERAL_BOX_SHADOW,
    borderWidth: 1,
    borderColor: extraLightGray,
  },
});
