import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {TransactionHistory} from './transactionHistory';

const Profile = () => (
  <ScrollView style={{height: 'auto'}}>
    {/* Top View */}
    <View
      style={{
        flex: 1,
        //backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginVertical: '10%',
      }}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 25, color: 'black'}}>Profile</Text>
        <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
          Alex Chong
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
        }}
        style={{width: 50, height: 50}}
      />
      {/* <View
        style={{
          backgroundColor: 'lightgreen',
          height: '100%',
          width: '20%',
          borderRadius: 25,
        }}></View> */}
    </View>
    {/* Middle View */}
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        //width: '100%',
        alignItems: 'flex-start',
        borderRadius: 30,
        padding: '5%',
        justifyContent: 'space-between',
        marginRight: '5%',
        marginLeft: '5%',
      }}>
      <View style={{flexDirection: 'column', marginBottom: '15%'}}>
        <Text style={{color: 'white', fontSize: 15}}>Total Spent</Text>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 30}}>
          RM 9840
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: '50%',
          height: '30%',
          marginBottom: '15%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'green',
              fontWeight: '600',
              fontSize: 15,
            }}>
            Browse Shop
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    {/* Bottom View */}
    <View
      style={{
        //margin: '5%',
        width: '100%',
        padding: '5%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
    </View>
  </ScrollView>
);

export default Profile;
