import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import DataContextHealthy from '../../datacontextHealthy';
import HealthyFoodScreenBox from './HealthyFoodScreenBox';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const HealthyFood = () => {
  const ctx = useContext(DataContextHealthy);

  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const placeOrder = () => {
    setModalVisible(!isModalVisible);
    ctx.onCartAddItem();
  };

  const removeOrder = () => {
    setModalVisible(!isModalVisible);
    ctx.onCartRemoveItem();
  };

  const sendInfo = submittedValue => {
    setData(submittedValue);
  };

  const sendVisiblity = submittedValue => {
    setModalVisible(submittedValue);
  };

  console.log(ctx.cart);

  const checkItem = obj => obj.key === ctx.keys;
  return (
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
        <HealthyFoodScreenBox
          onSendInfo={sendInfo}
          onSendVisiblity={sendVisiblity}
        />
        <Modal
          isVisible={isModalVisible}
          backdropOpacity={0.8}
          backdropTransitionOutTiming={0}
          style={{alignItems: 'center'}}
          onBackdropPress={toggleModal}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: 'white',
              height: '80%',
              width: '90%',
              borderRadius: 15,
            }}>
            {data.imageUrl ? (
              <Image
                source={{uri: data.imageUrl}}
                style={{
                  height: '45%',
                  width: '100%',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: 'grey',
                  height: '45%',
                  width: '100%',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}></View>
            )}
            <View style={{padding: '5%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 25,
                    color: 'black',
                  }}>
                  {data.title}
                </Text>
                <Text style={{fontSize: 25, color: 'green', fontWeight: '600'}}>
                  RM {data.price}
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'justify',
                  color: '#706E6D',
                  fontWeight: '600',
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'justify',
                color: '#706E6D',
                fontWeight: '600',
                fontSize: 25,
                marginTop: '3%',
              }}>
              {ctx.amountArray[ctx.keys - 1]}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                margin: '3%',
              }}>
              <Icon
                name="remove-outline"
                size={35}
                color="red"
                onPress={ctx.onDecrement}
              />
              <Icon
                name="add-outline"
                size={35}
                color="green"
                onPress={ctx.onIncrement}
              />
            </View>

            {ctx.amountArray[ctx.keys - 1] == 0 && ctx.cart.some(checkItem) ? (
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  backgroundColor: 'red',
                  height: '7%',
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={removeOrder}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: '600', fontSize: 20}}>
                    Remove Item
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  backgroundColor: 'green',
                  height: '7%',
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={placeOrder}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: '600', fontSize: 20}}>
                    Update Cart
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default HealthyFood;
