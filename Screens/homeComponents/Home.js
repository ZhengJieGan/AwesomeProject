import React from 'react';
import {Button, Text, View, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FastFood from './FastFood';
import HealthyFood from './HealthyFood';
import HealthyFoodBox from './HealthyFoodBox';
import FastFoodBox from './FastFoodBox';
import CartComponents from '../payComponents/CartComponents';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        // headerShadowVisible: false,
        // headerTitleAlign: 'left',
      }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="FastFood" component={FastFood} />
      <HomeStack.Screen name="HealthyFood" component={HealthyFood} />
    </HomeStack.Navigator>
  );
};

const DATA = [
  {
    id: '1',
    title: 'First Item',
    imageUrl:
      'https://www.simplyrecipes.com/thmb/Q_0Tl40E7EkxpmOImQeTpzFEO38=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Vertical-3c66b6ae87184189920ad84f3f1db6bb.jpg',
  },
  {
    id: '2',
    title: 'Second Item',
    imageUrl:
      'https://i0.wp.com/www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg?resize=850%2C700&ssl=1',
  },
  {
    id: '3',
    title: 'Third Item',
    imageUrl:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-broccoli-main-guide-image-700-350-631a035.jpg?quality=90&webp=true&resize=700,636',
  },
  {
    id: '4',
    title: 'Fourth Item',
    imageUrl:
      'https://www.thespruceeats.com/thmb/Oqvuvzic6RJX1xgbyozONodtju4=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/perfect-hard-boiled-eggs-995510-Hero_3-03d1b108d1ca489dad9e1f1d7fdba73f.jpg',
  },
  {
    id: '5',
    title: 'Fifth Item',
    imageUrl:
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg?quality=45&resize=504,458?quality=90&webp=true&resize=504,458',
  },
];

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <HealthyFoodBox title={item.title} imageUrl={item.imageUrl} key={item.id} />
  );

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        height: 'auto',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: '5%',
        }}>
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'green'}}>
          Welcome Back, Alex
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: '5%',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'green'}}>
            Eat Healthy
          </Text>

          <Icon
            name="arrow-forward-outline"
            size={25}
            color="black"
            onPress={() => navigation.navigate('HealthyFood')}
          />
        </View>
        <View
          style={{
            marginTop: '5%',
            flex: 1,
            backgroundColor: 'white',
            padding: '2%',
            height: '50%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'green'}}>
            Indulge
          </Text>
          <Icon
            name="arrow-forward-outline"
            size={25}
            color="black"
            onPress={() => navigation.navigate('FastFood')}
          />
        </View>
        <View
          style={{
            marginTop: '5%',
            flexWrap: 'wrap',
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: '2%',
            justifyContent: 'space-around',
          }}>
          <FastFoodBox />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeStackScreen;
