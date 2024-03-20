import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import {logoutUser} from '../../redux/action/action';

const Logout = ({navigation}) => {
  const [doubleButton, setDoubleButton] = useState(true);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <CustomAlert
        title="Logout"
        message="Are you sure you want to Logout?"
        btnTxt="Logout"
        twoButton={doubleButton}
        onPress={handleLogout}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  mainContainer: {
    // flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
