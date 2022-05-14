import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartComponents from './CartComponents';

const PayStack = createNativeStackNavigator();

const PayStackScreen = ({navigation}) => {
  return (
    <PayStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'left',
      }}>
      <PayStack.Screen
        name="PayScreen"
        component={Pay}
        options={{
          title: 'Checkout',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 25,
          },
          headerTintColor: 'black',
        }}
      />
    </PayStack.Navigator>
  );
};

const Pay = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'green',
          padding: '5%',
          backgroundColor: 'white',
        }}>
        <CartComponents />
      </View>
    </ScrollView>
  );
};

export default PayStackScreen;
