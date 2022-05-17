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
import DataContextFast from '../../datacontextFast';

const array = [
  {
    key: 1,
    title: 'Burger',
    subtitle: 'example subtitle 1',
    price: 15,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: 2,
    title: 'Pizza',
    subtitle: 'example subtitle 2',
    price: 25,
    imageUrl:
      'https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
  },
  {
    key: 3,
    title: 'French Fries',
    subtitle: 'example subtitle 3',
    price: 12,
    imageUrl:
      'https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg',
  },
  {
    key: 4,
    title: 'Soda',
    subtitle: 'example subtitle 3',
    price: 8,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPqhhX3XIkn_uXlsIA-D147fRvLjtxG-qNXvpCUSaovh-F81vAHsGMpu69Z1mogfYsnY&usqp=CAU',
  },
  {
    key: 5,
    title: 'Chocolate',
    subtitle: 'example subtitle 3',
    price: 5,
    imageUrl:
      'https://3z6mv8219w2s2w196j1dkzga-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Lab-Grown-Chocolate-Could-Be-The-Future-of-Sustainable-Confectionery.jpg',
  },
  {
    key: 6,
    title: 'Donut',
    subtitle: 'example subtitle 3',
    price: 35,
    imageUrl:
      'https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg',
  },
  {
    key: 7,
    title: 'Fried Chicken',
    subtitle: 'example subtitle 1',
    price: 7,
    imageUrl:
      'https://assets.epicurious.com/photos/57a8a45db10b4fb03f234f34/16:9/w_1280,c_limit/southern-fried-chicken.jpg',
  },
  {
    key: 8,
    title: 'Nugget',
    subtitle: 'example subtitle 2',
    price: 150,
    imageUrl:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383770571120.jpeg',
  },
];

const FastFoodScreenBox = ({onSendInfo, onSendVisiblity}) => {
  const ctx = useContext(DataContextFast);

  return array.map(element => {
    const toggleModal = () => {
      ctx.onSetItemTitle(element.title, element.key, element.price);
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
