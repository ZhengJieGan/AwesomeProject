import React, {useContext} from 'react';
import {
  Button,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import DataContext from '../../datacontext';

const CartComponents = () => {
  const ctx = useContext(DataContext);

  return ctx.cart.map(element => {
    return (
      <View
        key={element.key}
        style={{
          width: '100%',
          backgroundColor: 'lightgreen',
          borderRadius: 15,
          marginBottom: '5%',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 25, color: 'black', padding: 20}}>
          {element.title}
        </Text>
        <Text style={{fontSize: 25, color: 'black', padding: 20}}>
          {element.amount}
        </Text>
      </View>
    );
  });
};

export default CartComponents;
