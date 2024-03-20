import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({title, onPress, twoButton, CancleButton}) => {
  const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(twoButton);

  return isAuthenticated ? (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress} style={styles.resetBtn}>
        <Text style={styles.resetTxt}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.resetTxt}>Cancel</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resetBtn: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 20,
    width: '45%',
  },

  resetTxt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },

  cancelBtn: {
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 20,
    width: '45%',
  },

  button: {
    width: '100%',
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBD59',
  },

  text: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
});
