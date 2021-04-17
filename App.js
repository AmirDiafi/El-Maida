import React from 'react';
import MainNav from './Navigators/MainNav';
import Splash from './Navigators/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#16697a" barStyle="light-content" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Main" component={MainNav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
