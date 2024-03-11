import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    top: -70,
    zIndex: 99,
    flex: 1,
    margin: 15,
    padding: 30,
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

  forgotContainer: {
    flex: 0.28,
    margin: moderateScale(20),
    padding: moderateScale(20),
    // position: 'absolute',
    borderRadius: moderateScale(20),
    shadowColor: 'green',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: -55,
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
    borderWidth: 0.2,
    paddingLeft: 20,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn1: {
    width: '100%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  btn2: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
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
