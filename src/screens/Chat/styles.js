import {StyleSheet} from 'react-native';
import {moderateScale} from '@Utills/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  txtInput: {
    flex: 1,
    paddingLeft: moderateScale(10),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  sendBtn: {
    position: 'absolute',
    right: 15,
  },

  chatsContainer: {
    // backgroundColor: 'red',
  },

  myMsgContainer: {
    marginBottom: moderateScale(10),
    alignItems: 'flex-end',
  },

  otherMsgContainer: {
    padding: moderateScale(10),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(10),
    alignItems: 'flex-start',
    // backgroundColor: 'red'
  },

  myTxtContainer: {
    padding: moderateScale(10),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(10, 73, 117, 0.1)',
  },

  otherTxtContainer: {
    padding: moderateScale(10),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(218, 218, 218, 0.38)',
  },

  message: {
    fontSize: moderateScale(20),
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Nunito-Regular',
  },
});
