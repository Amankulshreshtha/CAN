import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store/store';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation/StackNavigation';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
