import React from 'react';
import {Button, Text, View, ScrollView, Image} from 'react-native';

const HealthyFoodBox = ({title, imageUrl}) => (
  <View
    style={{
      alignItems: 'center',
    }}>
    <View
      style={{
        height: 120,
        backgroundColor: 'white',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginHorizontal: 8,
        //borderColor: 'green',
        //borderWidth: 1,
      }}>
      <Image
        style={{width: 100, height: 100, borderRadius: 15}}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
    <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
      {title}
    </Text>
  </View>
);

//const renderItem = ({item}) => <HealthyFoodBox title={item.title} />;

export default HealthyFoodBox;
