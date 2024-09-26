import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = props => {
  const detail = props.route.params.item;
  const navigation = useNavigation();
  console.log('ini props', props.route.params.item);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Details</Text>
      </View>

      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={detail.image} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoName}>{detail.name}</Text>
          <Text style={styles.infoPrice}>Rp{detail.price}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" style={styles.iconStar} />
            <Text style={styles.infoRating}>{detail.rating} / 5 </Text>
            <View
              style={{
                borderWidth: 1,
                paddingVertical: 10,
                borderColor: 'grey',
                backgroundColor: 'grey',
                marginHorizontal: 5,
              }}></View>
            <Text style={styles.infoSold}> {detail.sold} Sold</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            backgroundColor: '#000',
            marginHorizontal: 10,
          }}></View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>{detail.desc}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" style={styles.bottomIcon} />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            paddingVertical: 20,
            backgroundColor: '#000',
          }}></View>
        <TouchableOpacity>
          <Icon2 name="cart-plus" style={styles.bottomIcon} />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            paddingVertical: 20,
            backgroundColor: '#000',
          }}></View>
        <TouchableOpacity>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
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
  Icon: {
    marginLeft: 10,
    fontSize: 28,
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
  },
  image: {
    resizeMode: 'cover',
    width: 400,
    height: 400,
  },
  infoContainer: {
    // backgroundColor: 'red',
    marginHorizontal: 15,
    marginVertical: 10,
  },

  bottomContainer: {
    backgroundColor: '#b8dbd9',
    marginBottom: 10,
    paddingBottom: 40,
    position: 'absolute',
    top: 680,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    right: 0,
    left: 0,
  },
  bottomIcon: {
    color: '#000',
    fontSize: 32,
    paddingLeft: 5,
  },
  checkoutText: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#9883e5',
    borderColor: '#9883e5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  infoName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#000',
    textAlign: 'justify',
  },
  infoPrice: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    color: '#000',
    marginTop: 10,
  },
  infoRating: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  infoSold: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  iconStar: {
    color: '#9883e5',
    fontSize: 20,
    paddingVertical: 10,
    paddingRight: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  descContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    paddingBottom: 100,
  },
  descText: {
    color: '#000',
    textAlign: 'justify',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
});

export default DetailScreen;
