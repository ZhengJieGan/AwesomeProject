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
import DataContextHealthy from '../../datacontextHealthy';

const array = [
  {
    key: 1,
    title: 'Chicken Breast',
    subtitle: 'example subtitle 1',
    price: 15,
    imageUrl:
      'https://www.simplyrecipes.com/thmb/Q_0Tl40E7EkxpmOImQeTpzFEO38=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Vertical-3c66b6ae87184189920ad84f3f1db6bb.jpg',
  },
  {
    key: 2,
    title: 'Salmon',
    subtitle: 'example subtitle 2',
    price: 20,
    imageUrl:
      'https://i0.wp.com/www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg?resize=850%2C700&ssl=1',
  },
  {
    key: 3,
    title: 'Broccoli',
    subtitle: 'example subtitle 3',
    price: 30,
    imageUrl:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-broccoli-main-guide-image-700-350-631a035.jpg?quality=90&webp=true&resize=700,636',
  },
  {
    key: 4,
    title: 'Boiled Egg',
    subtitle: 'example subtitle 3',
    price: 40,
    imageUrl:
      'https://www.thespruceeats.com/thmb/Oqvuvzic6RJX1xgbyozONodtju4=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/perfect-hard-boiled-eggs-995510-Hero_3-03d1b108d1ca489dad9e1f1d7fdba73f.jpg',
  },
  {
    key: 5,
    title: 'Almond',
    subtitle: 'example subtitle 3',
    price: 25,
    imageUrl:
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg?quality=45&resize=504,458?quality=90&webp=true&resize=504,458',
  },
  {
    key: 6,
    title: 'Oats',
    subtitle: 'example subtitle 3',
    price: 35,
    imageUrl:
      'https://images.ctfassets.net/3s5io6mnxfqz/5K3Gr6ujll2MT1qcpTeDUP/322cd2c12cc7ab8c6d7d3782e9f12446/AdobeStock_270140136.jpeg?fm=jpg&w=900&fl=progressive',
  },
  {
    key: 7,
    title: 'Mango',
    price: 200,
    subtitle: 'example subtitle 1',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4BolQuqTbh5s0VexaIDlpnT5nxIiv3dKuQ&usqp=CAU',
  },
  {
    key: 8,
    title: 'Salad',
    price: 20,
    subtitle: 'example subtitle 2',
    imageUrl:
      'https://assets.bonappetit.com/photos/5e8cdb60a7a01c00083b08a9/1:1/w_2560%2Cc_limit/HMONG-Potluck-Chopped-Salad.jpg',
  },
];

const HealthyFoodScreenBox = ({onSendInfo, onSendVisiblity}) => {
  const ctx = useContext(DataContextHealthy);

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

export default HealthyFoodScreenBox;
