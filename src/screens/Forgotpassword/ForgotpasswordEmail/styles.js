import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    top: -70,
    zIndex: 99,
    flex: 1,
    margin: moderateScale(15),
    padding: moderateScale(30),
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 0,
    elevation: 10,
    borderRadius: 30,

    marginBottom: '60%',
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },

  txtInput: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: moderateScale(20),
    // backgroundColor: 'red',
    borderColor: '#0A49755E',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn1: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    padding: verticalScale(10),
    backgroundColor: '#FFBD59',
  },

  btn2: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    padding: verticalScale(10),
    backgroundColor: '#00000040',
  },

  btnTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
});
