import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import oasisOffer from '../assets/oasisOffers.jpg';
import freeDelivery from '../assets/freeDelivery.jpg';
import oasisWinter from '../assets/oasisWinter.jpg';
import oasisWelcome from '../assets/oasisWelcome.jpg';

const NotifScreen = () => {
  const dataNotif = [
    {
      id: 1,
      image: freeDelivery,
      title: 'Free Delivery Voucher!',
      description:
        'Tired of paying a lot of shipping fees? Use this voucher to pay less shipping and do more shopping!',
      date: '28-12-2023 12:32',
    },
    {
      id: 2,
      image: oasisOffer,
      title: 'OasiSpecials!',
      description:
        "Oasis is offering some special vouchers just for you! Don't forget to use it and checkout!",
      date: '26-12-2023 11:06',
    },
    {
      id: 3,
      image: oasisWinter,
      title: 'Merry Christmas!',
      description:
        "Oasis is giving back this holiday! Get big discounts on ALL products just today, don't miss out!",
      date: '25-12-2023 09:21',
    },
    {
      id: 4,
      image: oasisOffer,
      title: 'OasiSpecials!',
      description:
        "Oasis is offering some special vouchers just for you! Don't forget to use it and checkout!",
      date: '23-12-2023 10:06',
    },
    {
      id: 5,
      image: oasisOffer,
      title: 'OasiSpecials!',
      description:
        "Oasis is offering some special vouchers just for you! Don't forget to use it and checkout!",
      date: '22-12-2023 11:48',
    },
    {
      id: 6,
      image: freeDelivery,
      title: 'Free Delivery Voucher!',
      description:
        'Tired of paying a lot of shipping fees? Use this voucher to pay less shipping and do more shopping!',
      date: '22-12-2023 08:32',
    },
    {
      id: 7,
      image: oasisWelcome,
      title: 'Welcome To Oasis!',
      description:
        "Hello there Romeo Kurniawan, Oasis is a place where you can shop with br-'ease'. Get it? breeze? ease?",
      date: '20-12-2023 11:48',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Notifications</Text>
        <TouchableOpacity>
          <Icon name="chatbubbles-outline" style={styles.Icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {dataNotif.map((item, index) => {
          console.log(item);
          return (
            <TouchableOpacity key={index}>
              <View style={styles.notifContainer}>
                <Image source={item.image} style={styles.notifImage} />
                <View style={styles.notifTextContainer}>
                  <Text style={styles.notifTitle}>{item.title}</Text>
                  <Text style={styles.notifDesc}>{item.description}</Text>
                  <Text style={styles.notifDate}>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  headerContainer: {
    backgroundColor: '#b8dbd9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  Icon: {
    margin: 10,
    fontSize: 30,
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  notifContainer: {
    backgroundColor: '#f4f4f9',
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  notifImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  notifTextContainer: {
    justifyContent: 'space-around',
    flex: 1,
    margin: 10,
  },
  notifTitle: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  notifDesc: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'justify',
    fontSize: 14,
  },
  notifDate: {
    color: 'grey',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});

export default NotifScreen;
