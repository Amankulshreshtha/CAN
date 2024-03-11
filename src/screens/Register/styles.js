import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  maincontainer: {
    top: -70,
    zIndex: 99,
    flex: 1,
    margin: moderateScale(10),
    padding: moderateScale(20),
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 0,
    borderRadius: moderateScale(30),
    position: 'relative',
    // height: '100%'
    marginBottom: -moderateScale(60),
  },
  MainText: {
    fontSize: moderateScale(38),
    alignSelf: 'center',
    marginBottom: -moderateScale(10),
    color: '#000000',
  },
  SubContainer: {
    padding: moderateScale(10),
  },
  InputText: {
    fontSize: moderateScale(20),
    marginTop: moderateScale(5),
  },
  InputBox: {
    borderRadius: moderateScale(10),
    borderWidth: 1.5,
    borderColor: '#0A49755E',
  },
  alreadyText: {
    alignSelf: 'center',
    color: '#0A4975',
    // fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  mainSubContainer: {
    // backgroundColor: 'red',
    marginTop: -moderateScale(10),
  },
  eyeView: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#0A49755E',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(10),
  },
  errorText:{
    color: 'red',
  }
});
