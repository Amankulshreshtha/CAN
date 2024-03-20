import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    padding: moderateScale(20),
  },

  heading: {
    fontSize: moderateScale(20),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },

  inputContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    // borderWidth: 2,
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    borderRadius: 8,
    borderWidth: 0.2,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#0A49755E',
  },

  referralHeading: {
    marginLeft: moderateScale(10),
    fontSize: moderateScale(20),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },
  name: {
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  Date: {
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(16),
  },
  subContainerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  email: {
    color: '#000000',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(16),
  },
  referralItem: {
    // flex: 1,
    margin: '3%',
    padding: moderateScale(10),
    backgroundColor: '#fff',
    elevation: 7,
    shadowColor: '#000040',
  },
});
