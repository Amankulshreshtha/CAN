import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
  ViewComponent,
} from 'react-native';
import CustomDrawerHeader from '@components/Headers/Header';
import {Calendar} from 'react-native-calendars';
import styles from './styles';
import IMAGES from '@assets/Image';
import {CalendarData} from '../../redux/api/api';
import {horizontalScale} from '../../Utills/Metrics';

const CalendarScreen = () => {
  const [selectDate, setSelectDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const eventData = await CalendarData();
        setEvents(eventData.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (selectDate && events.length > 0) {
      const filtered = events.filter(item => {
        const eventDate = item.date.split('T')[0];
        return eventDate === selectDate;
      });
      console.log(
        'Filtered events:',
        filtered,
        'Selected date:',
        selectDate,
        'All events:',
        events,
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents([]);
    }
  }, [selectDate, events]);

  const handleMeetingLinkPress = async meeting_url => {
    const formattedUrl = meeting_url.startsWith('http')
      ? meeting_url
      : `http://${meeting_url}`;
    try {
      await Linking.openURL(formattedUrl);
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const handleOpenDocument = async fileUrl => {
    try {
      if (fileUrl) {
        if (
          typeof fileUrl === 'string' &&
          (fileUrl.startsWith('http://') || fileUrl.startsWith('https://'))
        ) {
          await Linking.openURL(fileUrl);
        } else {
          const baseUrl = 'http://54.190.192.105:9185/file/';
          const fullUrl = baseUrl + fileUrl;
          await Linking.openURL(fullUrl);
        }
      } else {
        console.error('Error: fileUrl is not defined');
      }
    } catch (error) {
      console.error('Error opening document:', error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <CustomDrawerHeader />
          <View style={styles.subContainer}>
            <Text style={styles.heading}>Calendar</Text>
            <Calendar
              onDayPress={day => {
                setSelectDate(day.dateString);
              }}
              markedDates={{
                [selectDate]: {selected: true, selectedColor: 'blue'},
              }}
              hideExtraDays={true}
            />
            <View style={styles.selectDateContainer}>
              <Text style={styles.selectDateText}>
                {selectDate ? selectDate : 'No date selected'}
              </Text>
            </View>
            {filteredEvents.map((item, index) => (
              <View key={index} style={styles.itemsContainer}>
                <Text style={styles.topicTxt}>{item.title}</Text>
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
                {item.description && (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.discriptionText}>Discription</Text>
                    <Text style={styles.subContainerAgenda}>
                      {item.description}
                    </Text>
                  </View>
                )}
                {item.meeting_url && (
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
                )}
                <View style={styles.maindocContainer}>
                  <Text style={styles.discriptionText}>Pitch Deck:</Text>
                  <View style={styles.docContainer}>
                    <TouchableOpacity
                      onPress={() => handleOpenDocument(item.file)}>
                      <Image source={IMAGES.doc} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleOpenDocument(item.file)}>
                      <Image source={IMAGES.pdf} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CalendarScreen;
