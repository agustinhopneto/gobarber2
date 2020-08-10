import 'react-native-gesture-handler';

import React, { useEffect, useCallback } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  const changeBarColor = useCallback(async () => {
    try {
      await changeNavigationBarColor('#312e38', false, true);
    } catch (err) {
      //
    }
  }, []);

  useEffect(() => {
    changeBarColor();
  }, [changeBarColor]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        networkActivityIndicatorVisible
      />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
