import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    marginTop: '10%',
    margin: moderateScale(20),
    padding: moderateScale(10),
    // top: -70,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: moderateScale(20),
    elevation: 2,
  },

  quesTxt: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  helpBtn: {
    fontSize: moderateScale(20),
    marginTop: moderateScale(10),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: moderateScale(10),
  },

  txtInputContainer: {
    marginBottom: moderateScale(10),
  },

  inputTxt: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    height: verticalScale(110),
    borderRadius: 8,
    paddingLeft: horizontalScale(10),
    borderWidth: 0.2,
    textAlignVertical: 'top',
  },

  helpTxt: {
    fontSize: moderateScale(16),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn1: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: 8,
    paddingVertical: moderateScale(10),
    backgroundColor: '#00000040',
  },

  btn2: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: 8,
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  btnTxt: {
    fontSize: moderateScale(18),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
