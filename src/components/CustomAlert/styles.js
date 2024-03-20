import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    width: '90%',
    padding: 25,
    borderRadius: 15,
    // alignItems: 'center',
    shadowColor: '#000000400',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
  },

  titleTxt: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000000',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-SemiBold',
  },

  popupTxt: {
    fontSize: 19,
    color: '#000000A8',
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  },
});
