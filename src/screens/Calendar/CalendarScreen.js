import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CustomDrawerHeader from '@components/Headers/Header';
import {Calendar} from 'react-native-calendars';
import styles from './styles';
import IMAGES from '@assets/Image';
import {CalendarData} from '../../redux/api/api';

const CalendarScreen = () => {
  const [selectDate, setSelectDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const eventData = await CalendarData();
        console.log(eventData);
        setEvents(eventData.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleMeetingLinkPress = url => {
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <CustomDrawerHeader />

          <View style={styles.subContainer}>
            <Text style={styles.heading}>Calendar</Text>
            <Calendar
              onDayPress={day => {
                console.log('Date:', day);
                setSelectDate(day.dateString);
              }}
              markedDates={{
                [selectDate]: {selected: true, selectedColor: 'orange'},
              }}
              hideExtraDays={true}
            />

            <View style={styles.selectDateContainer}>
              <Text style={styles.selectDateText}>
                {selectDate ? selectDate : 'No date selected'}
              </Text>
            </View>

            {events.map((item, index) => (
              <View key={index} style={styles.itemsContainer}>
                <Text style={styles.topicTxt}>{item.topic}</Text>
                <View style={styles.items}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.typeTxt}>Type: </Text>
                    <Text style={{fontFamily: 'Nunito-Regular', fontSize: 16}}>
                      {item.type}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image source={IMAGES.clock} />
                    <Text style={styles.imgTxt}>{item.time}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image source={IMAGES.location} />
                    <Text style={styles.imgTxt}>{item.location}</Text>
                  </View>
                </View>
                <Text style={styles.subContainerAgenda}>{item.agenda}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text style={styles.subContainerMeetingText}>
                    Meeting URL:
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleMeetingLinkPress(item.meeting_url)}>
                    <Text style={styles.subContainerUrl}>
                      {item.meeting_url}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.pdfTxt}>Pitch Deck: {item.Document}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
