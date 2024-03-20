import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '@components/Headers/Header';
// import TabNavigator from '../../Navigation/TabNavigator';
import CustomButton from '@components/customeButton';
const ChangePassword = ({navigation}) => {
  const handleUpdate = () => {
    console.log('hlo');
  };

  return (
    <View style={styles.mainContainer}>
      <Header showDrawer={false} showBackButton={true} />
      <View style={styles.subContainer}>
        <Text style={styles.changePassTxt}>Change Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.passTxt}>Current Password</Text>
          <TextInput
            placeholder="Enter your current password"
            style={styles.txtInput}
          />
          <Text style={styles.passTxt}>Confirm Current Password</Text>
          <TextInput
            placeholder="Enter current password again"
            style={styles.txtInput}
          />
          <Text style={styles.passTxt}>New Password</Text>
          <TextInput placeholder="Enter new password" style={styles.txtInput} />
        </View>

        <CustomButton
          title="Update"
          onPress={handleUpdate}
          buttonStyle={{
            backgroundColor: '#FFBD59',
            marginTop: 20,
          }}
          // textStyle
        />
      </View>
      {/* <TabNavigator /> */}
    </View>
  );
};

export default ChangePassword;
