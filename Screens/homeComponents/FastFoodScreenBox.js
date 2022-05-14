import React, {useState, useContext, useEffect} from 'react';
import {
  Button,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import DataContext from '../../datacontext';

const array = [
  {
    key: 1,
    title: 'example fast 1',
    subtitle: 'example subtitle 1',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 2,
    title: 'example fast 2',
    subtitle: 'example subtitle 2',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 3,
    title: 'example fast 3',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 4,
    title: 'example fast 4',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 5,
    title: 'example fast 5',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 6,
    title: 'example fast 6',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 7,
    title: 'example fast 7',
    subtitle: 'example subtitle 1',
    imageUrl: '',
  },
  {
    key: 8,
    title: 'example fast 8',
    subtitle: 'example subtitle 2',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
];

const FastFoodScreenBox = ({onSendInfo, onSendVisiblity}) => {
  const ctx = useContext(DataContext);

  return array.map(element => {
    const toggleModal = () => {
      ctx.onSetItemTitle(element.title, element.key);
      onSendInfo(element);
      onSendVisiblity(true);
    };
    return (
      <TouchableOpacity key={element.key} onPress={toggleModal}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: '15%',
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '5%',
              borderRadius: 15,
            }}>
            {element.imageUrl ? (
              <Image
                style={{width: 170, height: 200, borderRadius: 15}}
                source={{
                  uri: element.imageUrl,
                }}
              />
            ) : (
              <View
                style={{
                  width: 170,
                  height: 200,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>No picture</Text>
              </View>
            )}
          </View>
          <Text>{element.title}</Text>
        </View>
      </TouchableOpacity>
    );
  });
};

export default FastFoodScreenBox;
