import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation/StackNavigation';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
