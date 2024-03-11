import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '@assets/Image';

const Header = ({height, showDrawer = true, showBackButton = false}) => {
  const navigation = useNavigation();

  const handleDrawerPress = () => {
    navigation.openDrawer();
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A4975',
        height: height || 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
      }}>
      {showDrawer && !showBackButton && (
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <TouchableOpacity onPress={handleDrawerPress}>
            <Image style={{margin: 8}} source={IMAGES.drawer} />
          </TouchableOpacity>
        </View>
      )}

      {showBackButton && (
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image style={{width: 28, height: 18}} source={IMAGES.back} />
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '12%',
        }}>
        <Image
          source={IMAGES.logo}
          style={{width: '50%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
