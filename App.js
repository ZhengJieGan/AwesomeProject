import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pay from './Screens/payComponents/Pay';
import ProfileStackScreen from './Screens/profileComponents/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './Screens/homeComponents/Home';
import FastFood from './Screens/homeComponents/FastFood';
import PayStackScreen from './Screens/payComponents/Pay';
import {DataContextFastProvider} from './datacontextFast';
import {DataContextHealthyProvider} from './datacontextHealthy';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <DataContextFastProvider>
      <DataContextHealthyProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarIcon: ({focused, color, size}) => {
                if (route.name === 'Pay') {
                  return (
                    <Icon
                      name="card-outline"
                      size={25}
                      color={focused ? 'green' : 'black'}
                    />
                  );
                } else if (route.name === 'Profile') {
                  return (
                    <Icon
                      name="person-outline"
                      size={25}
                      color={focused ? 'green' : 'black'}
                    />
                  );
                } else if (route.name === 'Home') {
                  return (
                    <Icon
                      name="restaurant-outline"
                      size={25}
                      color={focused ? 'green' : 'black'}
                    />
                  );
                }
              },
              tabBarInactiveTintColor: 'white',
              tabBarActiveTintColor: 'green',
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Pay" component={PayStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </DataContextHealthyProvider>
    </DataContextFastProvider>
  );
};

export default App;
