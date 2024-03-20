import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './Styles';
// import CustomDrawerHeader from '@components/Headers/CustomDrawerHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from '@components/Headers/Header';
import { ScrollView } from 'react-native-gesture-handler';

const Valuation = ({navigation}) => {
  const detailData = [
    {
      ques: 'Who is evaluating the initial valuations?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is MRR?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is round size?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is commitment?',
      // ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  const hadleHaveQuestion = () => {
    navigation.navigate('HaveQuestions');
  };
  const hadleAnsQus = () => {
    navigation.navigate('AnsQues');
  };

  const renderdetailData = ({item}) =>
    item.ans ? (
      <View style={styles.dataContainer}>
        <Text style={styles.ques}>{item.ques}</Text>
        <Text style={styles.ans}>{item.ans}</Text>
      </View>
    ) : (
      <View style={styles.dataContainer}>
        <TouchableOpacity onPress={() => hadleAnsQus(item)}>
          <Text style={styles.ques}>{item.ques}</Text>
          <Text style={styles.ans}>Add an answer</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <SafeAreaProvider>
      <View style={styles.mainContainer}>
        <Header showDrawer={false} showBackButton={true} />
        <View style={styles.subContainer}>
          <Text style={styles.heading}>Valuations & MRR</Text>
          <View style={styles.forumDataList}>
            <FlatList
              data={detailData}
              renderItem={renderdetailData}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={styles.queryContainer}>
            <TouchableOpacity onPress={hadleHaveQuestion}>
              <Text style={styles.query}>Have any Questions?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Valuation;
