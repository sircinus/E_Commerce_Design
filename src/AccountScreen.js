import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import placeholderImage from '../assets/profile.jpg';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const AccountScreen = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef();
  const [placeholderImageUri, setProfileImage] = useState(placeholderImage);
  const openBottomSheet = () => bottomSheetRef.current.open();

  const Camera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      if (image) {
        setProfileImage({uri: image.path});
      }
    });
  };

  const Library = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      if (image) {
        setProfileImage({uri: image.path});
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.profileImageContainer}
          onPress={openBottomSheet}>
          <Image source={placeholderImageUri} style={styles.profileImage} />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={styles.fullName}>Romeo Kurniawan</Text>
          <Text style={styles.userName}>@romrom</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={styles.partContainer}>
          <Icon name="bag-handle-outline" style={styles.partIcon} />
          <Text style={styles.partText}>My Orders</Text>
        </TouchableOpacity>
        <View style={styles.orderContainer}>
          <TouchableOpacity style={styles.orderPart}>
            <Icon2 name="attach-money" style={styles.orderIcon} />
            <Text style={styles.orderText}>To Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderPart}>
            <Icon2 name="local-shipping" style={styles.orderIcon} />
            <Text style={styles.orderText}>To Ship</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderPart}>
            <Icon2 name="move-to-inbox" style={styles.orderIcon} />
            <Text style={styles.orderText}>To Receive</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.partContainer}>
          <Icon name="ticket-outline" style={styles.partIcon} />
          <Text style={styles.partText}>My Vouchers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.partContainer}
          onPress={() => navigation.navigate('WishlistScreen')}>
          <Icon name="heart-outline" style={styles.partIcon} />
          <Text style={styles.partText}>My Wishlist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          style={styles.partContainer}
          onPress={() => navigation.navigate('AccountInfoScreen')}>
          <Icon name="settings-outline" style={styles.partIcon} />
          <Text style={styles.partText}>My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.partContainer}>
          <Icon2 name="support-agent" style={styles.partIcon} />
          <Text style={styles.partText}>OASISupport</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.LogOutButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.LogOutText}>Log Out</Text>
      </TouchableOpacity>

      <RBSheet ref={bottomSheetRef} height={180} openDuration={200}>
        <TouchableOpacity style={styles.rbButtonContainer} onPress={Camera}>
          <Icon name="camera" style={styles.rbIcon} />
          <Text style={styles.rbText}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rbButtonContainer} onPress={Library}>
          <Icon name="image" style={styles.rbIcon} />
          <Text style={styles.rbText}>Browse Gallery</Text>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  profileContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#b8dbd9',
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
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
    marginLeft: 15,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  profileImageContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#000',
    marginHorizontal: 15,
    fontSize: 20,
    marginBottom: 3,
    color: '#000',
  },
  LogOutButton: {
    backgroundColor: '#04724d',
    marginTop: 50,
    borderRadius: 5,
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  LogOutText: {
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 10,
    color: '#f4f4f9',
    fontFamily: 'Montserrat-SemiBold',
  },
  fullName: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  userName: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
  nameContainer: {
    marginHorizontal: 20,
    alignSelf: 'center',
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: '#b8dbd9',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  partContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    flexDirection: 'row',
  },
  partText: {
    padding: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#000',
    alignSelf: 'center',
  },
  partIcon: {
    padding: 5,
    fontSize: 32,
    alignSelf: 'center',
    color: '#000',
  },
  rbButtonContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    height: 60,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderBottomWidth: 2,
  },
  rbIcon: {
    color: '#9883e5',
    margin: 10,
    fontSize: 24,
  },
  rbText: {
    fontSize: 20,
    color: '#9883e5',
    fontFamily: 'Montserrat-SemiBold',
  },
  rbAllContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  orderPart: {
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingHorizontal: 10,
    width: 110,
    borderRadius: 5,
    paddingVertical: 5,
    borderColor: '#9883e5',
    borderWidth: 2,
  },
  orderText: {
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    color: '#9883e5',
    textAlign: 'center',
  },
  orderIcon: {
    textAlign: 'center',
    fontSize: 32,
    color: '#9883e5',
  },
});

export default AccountScreen;
