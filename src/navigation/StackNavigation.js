import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '@screens/Register/Register';
import Login from '@screens/login/Login';
import ForgotPasswordEmail from '@screens/Forgotpassword/ForgotpasswordEmail/ForgotpasswordEmail';
import ForgotPasswordMessage from '@screens/Forgotpassword/ForgotPasswordMessage/ForgetPasswordMessage';
import CustomHeader from '@components/Headers/CustomHeader';
import {verticalScale} from '../Utills/Metrics';
import DrawerNavigation from './DrawerNavigator';
import HaveQuestions from '@screens/Forum/ForumComponent/HaveQuestions/HaveQuestions';
import Valuation from '@screens/Forum/ForumComponent/Valuation/Valuation';
import Forum from '@screens/Forum/Forum';
import Slider from '@screens/Slider/Slider';
import AnsQues from '../screens/Forum/ForumComponent/AnsQues/AnsQues';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Slider"
        screenOptions={{
          // header: () => <CustomHeader />,
          headerStyle: {backgroundColor: '#0A4975', height: 200},
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            header: () => <CustomHeader height={verticalScale(246)} />,
            title: 'Register',
            headerStyle: {height: 300},
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => <CustomHeader height={verticalScale(343)} />,
            title: 'Login',
            headerStyle: {height: verticalScale(300)},
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordEmail}
          options={{
            header: () => <CustomHeader height={verticalScale(343)} />,
            // headerShown: false,
            title: 'Forgot Password',
            headerStyle: {height: verticalScale(200)},
          }}
        />
        <Stack.Screen
          name="ForgotPasswordMessage"
          component={ForgotPasswordMessage}
          options={{
            header: () => <CustomHeader height={verticalScale(343)} />,
            // headerShown: false,
            title: 'Forgot Password Message',
            headerStyle: {height: verticalScale(200)},
          }}
        />
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
        <Stack.Screen
          name="Valuation"
          component={Valuation}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
        <Stack.Screen
          name="HaveQuestions"
          component={HaveQuestions}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
        <Stack.Screen
          name="AnsQues"
          component={AnsQues}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
        <Stack.Screen
          name="Formu"
          component={Forum}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
