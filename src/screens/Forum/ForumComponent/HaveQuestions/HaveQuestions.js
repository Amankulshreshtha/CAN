import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

import CustomDrawerHeader from '../../components/CustomDrawerHeader';

const HaveQuestions = ({navigation}) => {
  const handleCancel = () => {
    console.log('first');
  };

  const handlePost = () => {
    console.log('firstQuestion');
  };
  return (
    <View style={styles.mainContainer}>
      <CustomDrawerHeader />
      <View style={styles.subContainer}>
        <Text style={styles.quesTxt}>Have Questions</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Category</Text>
            <TextInput
              placeholder="Enter your current password"
              style={styles.txtInput}
            />
          </View>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Questions</Text>
            <TextInput
              placeholder="Type your questions"
              style={styles.txtInput}
            />
          </View>
          <Text style={styles.helpTxt}>
            If you have already asked similar question in the past please wait
            for others to send in their response instead of asking it again.
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn1} onPress={handleCancel}>
            <Text style={styles.btnTxt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={handlePost}>
            <Text style={styles.btnTxt}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HaveQuestions;
