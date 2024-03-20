import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '@Utills/Metrics';

const styles = StyleSheet.create({
  slideBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    marginTop: '10%',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    fontSize: moderateScale(24),
  },
  rightArrow: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(20),
    marginRight: verticalScale(20),
  },
  activeDot: {
    backgroundColor: 'white',
  },
});

export default styles;
