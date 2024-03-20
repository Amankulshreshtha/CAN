import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '@components/Headers/Header';

import CustomButton from '@components/customeButton';
import {Calendar} from 'react-native-calendars';
import IMAGES from '@assets/Image';

const Profile = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleUpdate = () => {
    console.log('first');
  };

  const handleCalendarPress = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const onDayPress = day => {
    const formattedDate = `${day.day}-${day.month}-${day.year}`;
    setSelectedDate(formattedDate);
    setCalendarVisible(false);
    console.log('Selected date:', day);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header showDrawer={false} showBackButton={true} />
      <View style={styles.subContainer}>
        <Text style={styles.profileTxt}>My Profile</Text>
        <View style={styles.profileContainer}>
          <Image source={IMAGES.camera} style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput placeholder="Enter Name" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput placeholder="Enter Email" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>Date of birth</Text>
          <View style={styles.dobView}>
            <TextInput
              placeholder="Select Date"
              value={selectedDate}
              editable={false}
            />
            <TouchableOpacity onPress={handleCalendarPress}>
              <Image source={IMAGES.calendar} style={styles.Image} />
            </TouchableOpacity>
          </View>
          {isCalendarVisible && <Calendar onDayPress={onDayPress} />}
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput placeholder="Enter Phone" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>Organization</Text>
          <TextInput placeholder="Enter Organization" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>State</Text>
          <TextInput placeholder="Enter State" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>City</Text>
          <TextInput placeholder="Enter City" style={styles.txtInput} />
        </View>
        <CustomButton title="Update" onPress={handleUpdate} />
      </View>
    </ScrollView>
  );
};

export default Profile;
