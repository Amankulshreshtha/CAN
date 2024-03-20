import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '@components/Headers/Header';
import {FormuData} from '../../redux/api/api';
import styles from './styles';

const Forum = ({navigation}) => {
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    async function fetchForumData() {
      try {
        const data = await FormuData();
        console.log('hellooo', data);
        setForumData(data.result);
      } catch (error) {
        console.error('Error fetching forum data:', error);
      }
    }
    fetchForumData();
    return () => {};
  }, []);

  const handleQus = () => {
    navigation.navigate('Valuation');
    console.log('helloo');
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={handleQus}>
        <Text style={styles.title}>{item.category_name}</Text>
        <Text style={styles.text}>{item.description}</Text>
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
