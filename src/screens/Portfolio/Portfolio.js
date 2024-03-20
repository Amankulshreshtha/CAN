import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '@components/Headers/Header';
import styles from './styles';
import IMAGES from '@assets/Image';
import {PortfolioData} from '../../redux/api/api';

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await PortfolioData();
        // console.log('Portfolio data:', response.data.result);
        setPortfolioData(response.result);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };
    fetchPortfolioData();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemData}>
      <View style={{flexDirection: 'row'}}>
        <Image source={IMAGES.jerry} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Amount:</Text> {item.total_amount}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}># of shares:</Text> {item.shares}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 2,
        }}>
        <Text style={styles.details}>
          <Text style={styles.txt}>At Valuation:</Text> {item.valuation}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}>Round Size:</Text> {item.roundSize}
        </Text>
      </View>
      <View style={{marginTop: 2}}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Date of Investment:</Text>
          {item.investment}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>My Portfolio</Text>

        <FlatList
          data={portfolioData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
