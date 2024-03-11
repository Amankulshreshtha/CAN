import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    padding: moderateScale(20),
  },

  profileTxt: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  profileContainer: {
    width: 90,
    height: verticalScale(90),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(50),
    borderWidth: 0.2,
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },

  icon: {
    position: 'absolute',
    alignSelf: 'center',
  },

  inputContainer: {
    marginTop: moderateScale(10),
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    borderRadius: 8,
    paddingLeft: moderateScale(10),
    width: '100%',
    borderWidth: 1,
    marginBottom: moderateScale(10),
    borderColor: '#0A49755E',
  },

  dobView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: '#0A49755E',
    paddingLeft: 5,
  },

  updateBtn: {
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  updateBtnTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
  Image: {
    marginRight: moderateScale(10),
  },
});
