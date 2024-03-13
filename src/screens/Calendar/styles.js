import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  heading: {
    fontSize: moderateScale(22),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-SemiBold',
  },

  selectDateContainer: {
    marginTop: moderateScale(10),
  },

  subContainerText: {
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  itemsContainer: {
    margin: verticalScale(10),
    marginBottom: moderateScale(10),
    borderBottomWidth: 0.2,
    backgroundColor: '#fff',
  },

  topicTxt: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(5),
    color: 'rgba(10, 73, 117, 1)',
    fontFamily: 'Nunito-SemiBold',
  },

  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
  },

  typeTxt: {
    fontSize: moderateScale(16),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-Medium',
  },

  imgTxt: {
    fontSize: moderateScale(14),
    marginLeft: 10,
    color: 'rgba(0, 0, 0, 0.66)',
    fontFamily: 'Nunito-Regular',
  },

  subContainerAgenda: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
    color: 'rgba(0,0,0,0.66)',
    fontFamily: 'Nunito-Regular',
  },

  subContainerMeetingText: {
    fontSize: moderateScale(14),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-Medium',
  },

  subContainerUrl: {
    fontSize: moderateScale(14),
    color: 'rgba(0, 10, 255, 0.66)',
    fontFamily: 'Nunito-Regular',
    // backgroundColor: 'red',
    marginLeft: moderateScale(10),
  },

  selectDateText: {
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
    color: 'rgba(0, 0, 0, 0.66)',
  },

  pdfTxt: {
    fontSize: moderateScale(14),
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Nunito-Medium',
  },
});
