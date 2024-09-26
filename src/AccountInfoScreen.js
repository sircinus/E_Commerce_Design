import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ReadMore from '@fawazahmed/react-native-read-more';

import Icon from 'react-native-vector-icons/Ionicons';

const AccountInfoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Account Information</Text>
      </View>
      <View style={styles.attributeContainer}>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeText}>Full Name</Text>
          <TouchableOpacity>
            <Text style={styles.attributeText}>Romeo Kurniawan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeText}>Username</Text>
          <TouchableOpacity>
            <Text style={styles.attributeText}>romrom</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeText}>Telephone Number</Text>
          <TouchableOpacity>
            <Text style={styles.attributeText}>******53</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeText}>Email</Text>
          <TouchableOpacity>
            <Text style={styles.attributeText}>r*****7@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.changeAddress}>
          <Text style={styles.addressHeader}>Address</Text>
          <TouchableOpacity>
            <Icon name="chevron-forward" style={styles.forwardIcon} />
          </TouchableOpacity>
        </View>

        <ReadMore
          seeMoreStyle={{color: 'grey'}}
          seeLessStyle={{color: 'grey'}}
          numberOfLines={2}
          style={styles.addressText}>
          {
            'Jalan Impian Gang R No.28 RT 10/ RW 25, Kampung Lama, Tanjungpinang Timur; Kota Tanjungpinang, Kepulauan Riau, ID 28123'
          }
        </ReadMore>
      </View>
      <View style={styles.attributeContainer}>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeText}>Change Password</Text>
          <TouchableOpacity>
            <Icon name="chevron-forward" style={styles.forwardIcon} />
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
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#000',
    marginHorizontal: 15,
    fontSize: 20,
    marginBottom: 3,
    color: '#000',
  },
  attributeContainer: {
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  attributeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderBottomWidth: 2,
  },
  attributeText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  addressContainer: {
    marginHorizontal: 10,
  },
  changeAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  addressHeader: {
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginBottom: 5,
  },
  addressText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  forwardIcon: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default AccountInfoScreen;
