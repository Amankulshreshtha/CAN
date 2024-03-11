import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '@components/Headers/Header';

const Forum = ({navigation}) => {
  const handlequs = () => {
    navigation.navigate('Valuation');
    console.log('helloo');
  };

  const forumData = [
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Valuations & MRR',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={handlequs}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Forum</Text>
        <View style={styles.forumDataList}>
          <FlatList
            data={forumData}
            renderItem={renderForumData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Forum;
