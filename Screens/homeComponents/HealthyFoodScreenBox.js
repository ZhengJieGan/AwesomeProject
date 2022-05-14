import React from 'react';
import {Button, Text, View, ScrollView} from 'react-native';

const array = [
  {
    key: '1',
    title: 'example health 1',
    subtitle: 'example subtitle 1',
  },
  {
    key: '2',
    title: 'example health 2',
    subtitle: 'example subtitle 2',
  },
  {
    key: '3',
    title: 'example health 3',
    subtitle: 'example subtitle 3',
  },
  {
    key: '4',
    title: 'example health 4',
    subtitle: 'example subtitle 3',
  },
  {
    key: '5',
    title: 'example health 5',
    subtitle: 'example subtitle 3',
  },
  {
    key: '6',
    title: 'example health 6',
    subtitle: 'example subtitle 3',
  },
  {
    key: '7',
    title: 'example health 7',
    subtitle: 'example subtitle 1',
  },
  {
    key: '8',
    title: 'example health 8',
    subtitle: 'example subtitle 2',
  },
  {
    key: '9',
    title: 'example health 9',
    subtitle: 'example subtitle 3',
  },
  {
    key: '10',
    title: 'example health 10',
    subtitle: 'example subtitle 3',
  },
  {
    key: '11',
    title: 'example health 11',
    subtitle: 'example subtitle 3',
  },
  {
    key: '12',
    title: 'example health 12',
    subtitle: 'example subtitle 3',
  },
];

const HealthyFoodScreenBox = () => {
  return array.map(element => {
    return (
      <View
        key={element.key}
        style={{
          backgroundColor: 'green',
          width: '45%',
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '5%',
          borderRadius: 15,
        }}>
        <Text>{element.title}</Text>
      </View>
    );
  });
};

export default HealthyFoodScreenBox;
