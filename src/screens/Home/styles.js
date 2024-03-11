import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(20),
    color: '#000000',
    marginLeft: moderateScale(5),
    marginTop: verticalScale(10),
  },
  item: {
    backgroundColor: '#fff',
    padding: moderateScale(10),
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(10),
    elevation: 5,
  },
  name: {
    fontSize: moderateScale(20),
    marginLeft: moderateScale(10),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
  details: {
    fontSize: moderateScale(17),

    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },
  CalendarText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(20),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
    color: '#000000',
  },
  agendaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
    padding: moderateScale(20),
    marginVertical: moderateScale(3),
    marginHorizontal: moderateScale(14),
    borderWidth: 0.2,
    // elevation: 2,
  },
  date: {
    fontFamily: 'Nunito-bold',
    fontSize: moderateScale(25),
    marginBottom: 5,
    color: '#0A4975',
  },
  month: {
    fontFamily: 'Nunito-medium',
    fontSize: moderateScale(16),
    marginBottom: 5,
    color: '#0A4975',
  },
  eventItem: {
    marginLeft: moderateScale(10),
  },
  boldText: {
    fontFamily: 'Nunito-Bold',
  },
  DateContainer: {
    flexDirection: 'column',
    borderWidth: 2,
    width: 69,
    margin: 5,
    borderColor: '#0A4975',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  Meeting: {
    fontFamily: 'Nunito-Medium',
    fontSize: moderateScale(16),
    color: '#000000',
    marginRight: '15%',
  },
  agenda: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(16),
    color: '#000000',
    // marginRight: '15%',
  },
  eventSubContainer: {
    flexDirection: 'row',
  },
  event: {marginRight: '20%', marginLeft: 5},
});
