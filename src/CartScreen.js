import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ScrollView} from 'react-native-gesture-handler';

import bag from '../assets/greenBackpack.jpeg';
import earphone from '../assets/minibestEarphone.jpg';

const CartScreen = () => {
  const navigation = useNavigation();
  const dataCart = [
    {
      id: 1,
      image: bag,
      name: 'Open Ending Water Resistant Backpack Basic Tas Ransel (Light Colors)',
      color: 'Sage',
      price: '134.000',
    },
    {
      id: 2,
      image: earphone,
      name: 'MINIBEST TWS inpods i12 / 12 Pro Headset Bluetooth Macaron Handsfree Earphone Earbuds Headphone ',
      color: 'White',
      price: '39.900',
    },
    {
      id: 3,
      image: bag,
      name: 'Open Ending Water Resistant Backpack Basic Tas Ransel (Light Colors)',
      color: 'Sage',
      price: '134.000',
    },
    {
      id: 4,
      image: earphone,
      name: 'MINIBEST TWS inpods i12 / 12 Pro Headset Bluetooth Macaron Handsfree Earphone Earbuds Headphone ',
      color: 'White',
      price: '39.900',
    },
    {
      image: bag,
      name: 'Open Ending Water Resistant Backpack Basic Tas Ransel (Light Colors)',
      color: 'Sage',
      price: '134.000',
    },
  ];
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Cart</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {dataCart.map((item, index) => {
          console.log(item);
          return (
            <View style={styles.cartContainer} key={index}>
              <BouncyCheckbox
                size={25}
                fillColor="#9883e5"
                unfillColor="#FFFFFF"
                text="Select All"
                disableText={true}
                iconStyle={{
                  borderColor: '#9883e5',
                  marginLeft: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                }}
                innerIconStyle={{borderWidth: 0}}
              />
              <Image source={item.image} style={styles.cartImage} />
              <View style={styles.cartDesc}>
                <Text style={styles.cartName} numberOfLines={2}>
                  {item.name}
                </Text>
                <TouchableOpacity style={styles.variantButton}>
                  <Text style={styles.cartVariant}>
                    Variant Color: {item.color}
                  </Text>
                  <Icon name="chevron-down" style={styles.variantIcon} />
                </TouchableOpacity>
                <Text style={styles.cartPrice}>Rp{item.price}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.selectContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="#b8dbd9"
            unfillColor="#FFFFFF"
            text="Select All"
            disableText={true}
            iconStyle={{
              borderColor: '#9883e5',
              marginLeft: 5,
              marginTop: 5,
              borderRadius: 5,
              borderWidth: 1,
            }}
            innerIconStyle={{borderWidth: 0}}
          />
          <Text style={styles.selectText}>Select All</Text>
        </View>
        <TouchableOpacity style={styles.voucherContainer}>
          <Icon name="ticket-outline" style={styles.voucherIcon} />
          <Text style={styles.voucherText}>Use Voucher</Text>
          <Icon name="chevron-forward" style={styles.forwardIcon} />
        </TouchableOpacity>
        <View style={styles.checkoutContainer}>
          <Text style={styles.checkoutText}>Total Rp0</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  Icon: {
    marginLeft: 10,
    fontSize: 28,
    color: '#000',
  },
  bottomContainer: {
    backgroundColor: '#b8dbd9',
    marginBottom: 60,
    paddingTop: 10,
    borderRadius: 5,
    position: 'absolute',
    top: 580,
    left: 0,
    right: 0,
    paddingBottom: 60,
    paddingHorizontal: 10,
  },
  checkoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    borderWidth: 2,
  },
  selectContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 5,
    backgroundColor: '#9883e5',
    borderRadius: 5,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  selectText: {
    alignSelf: 'center',
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    marginTop: 5,
    fontSize: 16,
  },
  voucherContainer: {
    marginLeft: 5,
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  voucherIcon: {
    fontSize: 24,
    marginLeft: 5,
    color: '#000',
  },
  voucherText: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginTop: 1,
  },
  forwardIcon: {
    fontSize: 20,
    marginLeft: 5,
    color: '#000',
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
  },
  checkoutText: {
    color: '#000',
    margin: 5,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#9883e5',
    padding: 5,
    borderRadius: 3,
  },
  cartContainer: {
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#b8dbd9',
    gap: 5,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  cartName: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  cartVariant: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    padding: 5,
  },
  variantButton: {
    marginVertical: 5,
    maxWidth: 180,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9883e5',
    flexDirection: 'row',
  },
  variantIcon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
    color: '#000',
    fontSize: 16,
  },
  cartPrice: {
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  cartImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 5,
  },
  cartDesc: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 255,
    paddingVertical: 5,
  },
});

export default CartScreen;
