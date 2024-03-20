import {Image, View} from 'react-native';
import IMAGES from '@assets/Image';

export default CustomHeader = ({height}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A4975',
        height: height,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}>
      <Image
        source={IMAGES.logo}
        style={{width: '50%', height: '50%'}}
        resizeMode="contain"
      />
    </View>
  );
};
