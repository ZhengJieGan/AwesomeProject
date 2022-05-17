import React, {useContext} from 'react';
import {
  Button,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import DataContextFast from '../../datacontextFast';
import DataContextHealthy from '../../datacontextHealthy';

const CartComponents = () => {
  const ctx1 = useContext(DataContextFast);
  const ctx2 = useContext(DataContextHealthy);
  const finalCart = ctx1.cart.concat(ctx2.cart);

  return finalCart.map(element => {
    return (
      <View
        key={element.key}
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>{element.title}</Text>
          <Text style={{fontSize: 20, color: 'black'}}>
            Amount: {element.amount}
          </Text>
        </View>
        <View
          style={{
            marginRight: 30,
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 18}}>RM{element.amount * element.price}</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            margin: '5%',
            backgroundColor: 'grey',
            height: 1.5,
            width: '90%',
          }}></View>
      </View>
    );
  });
};

export default CartComponents;
