import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { windowHeight } from '../utils/Dimensions';



const SocialButton = ({
  buttonTitle,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 13,
    marginHorizontal:20,
    width: '90%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 23,
  },
  iconWrapper: {
    width: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});

