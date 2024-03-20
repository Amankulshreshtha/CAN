import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomButton from '../../../components/customeButton';

const ForgotPasswordEmail = ({navigation}) => {
  const [doubleButton, setdoubleButton] = useState(true);
  const handleResetPassword = () => {
    navigation.navigate('ForgotPasswordMessage');
  };

  const handleCancle = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          fontFamily: 'Nunito',
          fontWeight: '600',
          fontSize: 30,
          color: '#000000',
          marginBottom: 20,
        }}>
        Reset Password
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.txtInputHeading}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#00000045"
          style={styles.txtInput}
        />
      </View>

      <CustomButton
        title="Reset"
        twoButton={doubleButton}
        onPress={handleResetPassword}
        CancleButton={handleCancle}
      />
    </View>
  );
};

export default ForgotPasswordEmail;
