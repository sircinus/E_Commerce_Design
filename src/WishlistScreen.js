import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

import Redmi from '../assets/redminote12pro.jpg';
import Earphone from '../assets/minibestEarphone.jpg';
import bag from '../assets/greenBackpack.jpeg';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const WishlistScreen = () => {
  const navigation = useNavigation();
  const dataWish = [
    {
      id: 1,
      image: Redmi,
      name: 'Xiaomi Redmi Note 12 Pro (6GB/128GB) | (8GB/256GB) Kamera Quad 108MP 120Hz Layar AMOLED',
      price: '3.299.000',
      sold: '10,100',
    },
    {
      id: 2,
      image: Earphone,
      name: 'MINIBEST TWS inpods i12 / 12 Pro Handsfree',
      price: '39.900',
      sold: '10,000',
    },
    {
      id: 3,
      image: bag,
      name: 'Open Ending Water Resistant Backpack Basic Tas Ransel (Light Colors)',
      price: '134.000',
      sold: '8,900',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wishlist</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Your Wishlisted Items"
          placeholderTextColor={'grey'}
          style={styles.searchBar}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="search" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.scrollContainer}>
        <TouchableOpacity style={styles.scrollPartSortBy}>
          <Icon name="chevron-down" style={styles.iconSortBy} />
          <Text style={styles.scrollText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollPart}>
          <Text style={styles.scrollText}>Best Sellers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollPart}>
          <Text style={styles.scrollText}>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollPart}>
          <Text style={styles.scrollText}>Discounted</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollPart}>
          <Text style={styles.scrollText}>Available</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView contentContainerStyle={styles.wishlistContainer}>
        {dataWish.map((item, index) => {
          console.log(item);
          return (
            <TouchableOpacity style={styles.objectContainer} key={index}>
              <Image source={item.image} style={styles.imageContainer} />
              <Text numberOfLines={3} style={styles.objectTitle}>
                {item.name}
              </Text>
              <Text style={styles.objectPrice}>Rp{item.price}</Text>
              <View style={styles.detailContainer}>
                <Text style={styles.objectSold}>{item.sold} Sold</Text>
                <TouchableOpacity>
                  <Icon name="cart-outline" style={styles.objectBuy} />
                </TouchableOpacity>
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
  searchBar: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#9883e5',
    paddingLeft: 5,
  },
  searchIconContainer: {
    alignSelf: 'center',
  },
  searchIcon: {
    color: '#9883e5',
    fontSize: 24,
    marginRight: 10,
    marginBottom: 1,
  },
  scrollContainer: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  scrollPart: {
    backgroundColor: '#b8dbd9',
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    height: 40,
  },
  scrollText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  scrollPartSortBy: {
    marginRight: 5,
    marginLeft: 2,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 10,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    borderColor: '#9883e5',
    borderWidth: 2,
  },
  iconSortBy: {
    color: 'black',
    fontSize: 20,
    marginLeft: -5,
    marginRight: 5,
    marginTop: 1,
  },
  objectContainer: {
    backgroundColor: '#b8dbd9',
    margin: 10,
    borderRadius: 10,
  },
  imageContainer: {
    resizeMode: 'cover',
    width: 175,
    height: 175,
    alignSelf: 'center',
    borderRadius: 5,
  },
  wishlistContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  objectTitle: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 16,
    width: 160,
  },
  objectPrice: {
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  objectSold: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'center',
    fontSize: 14,
  },
  objectBuy: {
    color: '#000',
    backgroundColor: '#9883e5',
    padding: 5,
    borderRadius: 10,
    fontSize: 24,
  },
});

export default WishlistScreen;
