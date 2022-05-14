import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import HealthyFoodScreenBox from './HealthyFoodScreenBox';

const HealthyFood = () => (
  <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: '3%',
        justifyContent: 'space-around',
      }}>
      <HealthyFoodScreenBox />
    </View>
  </ScrollView>
);

export default HealthyFood;
