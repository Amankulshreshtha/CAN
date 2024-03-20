import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const ForgotPasswordMessage = ({navigation}) => {
  const handleContinue = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.headContainer}> */}
      {/* <Image
          source={require('../../../Image/logo.png')}
          style={{height: 155, width: 400, alignSelf: 'center'}}
        /> */}
      {/* </View> */}

      {/* <View style={styles.forgotContainer}> */}
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
        <Text style={styles.txtInputHeading}>
          If that email address is in our database, we wil send you an email to
          reset your password.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn1} onPress={handleContinue}>
          <Text style={styles.btnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

export default ForgotPasswordMessage;
