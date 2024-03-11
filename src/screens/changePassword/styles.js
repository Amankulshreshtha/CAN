import {StyleSheet} from 'react-native';
import {moderateScale} from '../../Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: moderateScale(20),
  },

  changePassTxt: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },

  passTxt: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    marginTop: moderateScale(10),
    borderRadius: 8,
    paddingLeft: moderateScale(10),
    borderWidth: 1,
    borderColor: '#0A49755E',
  },

  btn: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  btnTxt: {
    fontSize: moderateScale(10),
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
