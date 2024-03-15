import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'green',
    marginTop: '-20%',
    zIndex: 99,
  },

  headContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
    // marginTop: -40,
    // backgroundColor: 'green',
  },

  loginContainer: {
    // flex: 0.5,
    margin: moderateScale(20),
    marginBottom: '-45%',
    padding: moderateScale(20),
    // position: 'absolute',
    borderRadius: 20,
    shadowColor: '#000000',
    backgroundColor: '#fff',
    elevation: 5,
  },

  loginHeading: {
    marginBottom: moderateScale(10),
    color: '#000000',
    fontSize: moderateScale(30),
    fontWeight: '600',
    fontFamily: 'Nunito',
  },

  inputContainer: {
    marginBottom: moderateScale(20),
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },

  inputTxt: {
    flexDirection: 'row',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#0A49755E',
  },

  txtInput: {
    width: '100%',
    borderRadius: 6,
    borderWidth: 0.5,
    paddingLeft: moderateScale(10),
    borderColor: '#0A49755E',
  },

  eyeIcon: {
    marginRight: moderateScale(8),
  },

  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  forgotBtn: {},

  btnTxt: {
    fontSize: moderateScale(14),
    color: '#0A4975',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },

  loginBtn: {
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  loginBtnTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
  errorText: {
    color: 'red',
  },
});
