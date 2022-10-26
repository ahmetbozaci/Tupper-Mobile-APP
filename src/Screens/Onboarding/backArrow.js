import {View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Caret from '../../../assets/svg/caret-left.svg';
import styles from './styles';

const Back = ({goToBackSlide}) => {
  return (
    <View style={styles.backArrowContainer}>
      <TouchableWithoutFeedback onPress={goToBackSlide}>
        <Caret />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Back;
