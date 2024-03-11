import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: moderateScale(20),
  },

  heading: {
    marginBottom: moderateScale(10),
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  dataContainer: {
    padding: moderateScale(20),
    elevation: 10,
    shadowRadius: 2,
    borderRadius: moderateScale(20),
    marginBottom: moderateScale(20),
    shadowOpacity: 0.8,
    shadowColor: '#00000040',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
  },

  title: {
    fontSize: moderateScale(20),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  text: {
    fontSize: moderateScale(16),
    paddingTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
});
