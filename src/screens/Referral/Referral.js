import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView} from 'react-native';
import styles from './styles';
import Header from '@components/Headers/Header';
import CustomButton from '@components/customeButton';

const Referral = () => {
  const [referrals, setReferrals] = useState([
    {
      name: 'Jerry I',
      date: '02/22/3321',
      email: 'aman@gmail.com',
      mobile: '94373829373',
    },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleDateString('en-US');
    const newReferral = {
      name: name,
      date: currentDate,
      email: email,
      mobile: phone,
    };
    setReferrals([...referrals, newReferral]);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <Header showDrawer={false} showBackButton={true} />
        <View style={styles.subContainer}>
          <Text style={styles.heading}></Text>

          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Name</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.txtInput}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Email</Text>
            <TextInput
              placeholder="Enter Email"
              style={styles.txtInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Phone</Text>
            <TextInput
              placeholder="Enter Phone"
              style={styles.txtInput}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <CustomButton title="Submit" onPress={handleSubmit} />
        </View>

        <View>
          <Text style={styles.referralHeading}>My Referrals</Text>

          {referrals.map((item, index) => (
            <View key={index} style={styles.referralItem}>
              <View style={styles.subContainerItem}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.mobile}>{item.mobile}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Referral;
