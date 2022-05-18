import React from 'react';
import {Button, Text, View, ScrollView, Image} from 'react-native';

const array = [
  {
    key: '1',
    title: 'French Fries',
    subtitle: 'example subtitle 1',
    imageUrl:
      'https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg',
  },
  {
    key: '2',
    title: 'Burger',
    subtitle: 'example subtitle 2',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdoXGEufVEgfjSQjmeKw0cyDQdSg9_V0A-w&usqp=CAU',
  },
  {
    key: '3',
    title: 'Pizza',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
  },
  {
    key: '4',
    title: 'Soda',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPqhhX3XIkn_uXlsIA-D147fRvLjtxG-qNXvpCUSaovh-F81vAHsGMpu69Z1mogfYsnY&usqp=CAU',
  },
  {
    key: '5',
    title: 'Chocolate',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://3z6mv8219w2s2w196j1dkzga-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Lab-Grown-Chocolate-Could-Be-The-Future-of-Sustainable-Confectionery.jpg',
  },
  {
    key: '6',
    title: 'Donut',
    subtitle: 'example subtitle 3',
    imageUrl:
      'https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg',
  },
];

const FastFoodBox = () => {
  return array.slice(0, 6).map(element => {
    return (
      <View
        key={element.key}
        style={{
          alignItems: 'center',
          marginBottom: '3%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '45%',
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '5%',
            borderRadius: 15,
          }}>
          <Image
            style={{width: 150, height: 150, borderRadius: 15}}
            source={{
              uri: element.imageUrl,
            }}
          />
        </View>
        <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
          {element.title}
        </Text>
      </View>
    );
  });
};

export default FastFoodBox;
