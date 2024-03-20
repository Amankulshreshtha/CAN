import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    padding: moderateScale(20),
    marginBottom: '13%',
    // backgroundColor: 'red',
  },

  heading: {
    fontSize: moderateScale(22),
    color: '#000000',
    marginBottom: moderateScale(10),
    fontFamily: 'Nunito-SemiBold',
  },

  dataContainer: {
    padding: moderateScale(20),
    elevation: 5,
    shadowRadius: 2,
    borderRadius: 10,
    marginBottom: moderateScale(10),
    shadowOpacity: 0.8,
    shadowColor: '#00000040',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    // backgroundColor: 'gray',
  },

  ques: {
    fontSize: moderateScale(20),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  ans: {
    fontSize: moderateScale(16),
    paddingTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  queryContainer: {
    marginTop: moderateScale(30),
    //   backgroundColor: 'green',
  },

  query: {
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
});
