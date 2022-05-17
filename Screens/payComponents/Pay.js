import React, {useContext} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartComponents from './CartComponents';
import DataContextFast from '../../datacontextFast';
import DataContextHealthy from '../../datacontextHealthy';

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
  const ctx1 = useContext(DataContextFast);
  const ctx2 = useContext(DataContextHealthy);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
        }}>
        <CartComponents />
      </View>
      {ctx1.amountArray.reduce((a, b) => a + b, 0) > 0 ||
      ctx2.amountArray.reduce((a, b) => a + b, 0) > 0 ? (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'green',
            padding: 10,
            margin: 20,
            borderRadius: 15,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Pay RM {ctx1.total + ctx2.total}
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default PayStackScreen;
