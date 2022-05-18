import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export const TransactionHistory = () => (
  <View
    style={{
      flex: 1,
      height: '100%',
      width: '100%',
      marginBottom: '8%',
      //backgroundColor: 'teal',
      padding: '2%',
    }}>
    <View
      style={{
        //backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'column',
          height: '100%',
          padding: '2%',
          //backgroundColor: 'yellow',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '600',
            //padding: '2%',
            //paddingBottom: '15%',
          }}>
          Receipt 1
        </Text>
        <Text style={{marginTop: '15%'}}>Total: RM 500</Text>
      </View>
      <Text>Date of Purchased:{'\n'}05/05/2022</Text>
    </View>
    <View style={{backgroundColor: 'grey', width: '100%', height: 1}}></View>
  </View>
);
