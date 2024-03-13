import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {loginUser} from '../../redux/action/action';
import CustomButton from '@components/customeButton';
import IMAGES from '@assets/Image';
import styles from './styles';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  console.log(user);
  const email = user ? user.email : '';
  const password = user ? user.password : '';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleInvester = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <Formik
      initialValues={{email: email, password: password}}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(loginUser(values, navigation));
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.mainContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginHeading}>Login</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Email</Text>
              <TextInput
                placeholder="Enter Email"
                style={styles.txtInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Password</Text>
              <View style={styles.inputTxt}>
                <TextInput
                  placeholder="Enter Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                <Image source={IMAGES.eye} style={styles.eyeIcon} />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.forgotBtn}
                onPress={handleForgotPassword}>
                <Text style={styles.btnTxt}>Forgot Password ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.forgotBtn}
                onPress={handleInvester}>
                <Text style={styles.btnTxt}>Become an Investor</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title="Login"
              onPress={handleSubmit}
              buttonStyle={{
                backgroundColor: '#FFBD59',
                marginTop: 20,
              }}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
