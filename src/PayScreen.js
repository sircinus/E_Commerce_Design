import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  const navigation = useNavigation();
  const dataTf = [
    {
      id: 1,
      title: 'Payment',
      nominal: '100.000',
      date: '27-10-2023',
      plusminus: '-',
    },
    {
      id: 2,
      title: 'Top Up',
      nominal: '100.000',
      date: '26-10-2023',
      plusminus: '+',
    },
    {
      id: 3,
      title: 'Payment',
      nominal: '150.000',
      date: '25-10-2023',
      plusminus: '-',
    },
    {
      id: 4,
      title: 'Payment',
      nominal: '100.000',
      date: '25-10-2023',
      plusminus: '-',
    },
    {
      id: 5,
      title: 'Top Up',
      nominal: '300.000',
      date: '20-10-2023',
      plusminus: '+',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>OasisPay</Text>
      </View>
      <View style={styles.cashContainer}>
        <Text style={styles.cash}>Rp 263.000</Text>
      </View>
      <View style={styles.functionContainer}>
        <TouchableOpacity style={styles.functionPart}>
          <Icon2 name="cash-plus" style={styles.functionIcon} />
          <Text style={styles.functionText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.functionPart}
          onPress={() => navigation.navigate('QRScannerScreen')}>
          <Icon2 name="qrcode-scan" style={styles.functionIcon} />
          <Text style={styles.functionText}>QR Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionPart}>
          <Icon2 name="bank-transfer" style={styles.functionIcon} />
          <Text style={styles.functionText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionPart}>
          <Icon name="auto-graph" style={styles.functionIcon} />
          <Text style={styles.functionText}>Invest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tfContainer}>
        <Text style={styles.tfHeader}>Transaction History</Text>
      </View>
      <ScrollView>
        {dataTf.map((item, index) => {
          console.log(item);
          return (
            <TouchableOpacity key={index} style={styles.tfPart}>
              <View style={styles.tfDetails}>
                <Text style={styles.tfTitle}>{item.title}</Text>
                <Text style={styles.tfNominal}>
                  {item.plusminus}Rp{item.nominal}
                </Text>
              </View>
              <Text style={styles.tfDate}>{item.date}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.moreTfContainer}>
          <Text style={styles.moreTf}>Check All Transactions</Text>
          <Icon3 name="chevron-forward" style={styles.forwardIcon} />
        </TouchableOpacity>
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
    marginLeft: 15,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  functionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#b8d8d9',
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 5,
  },
  functionPart: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    width: 160,
    paddingVertical: 5,
    alignItems: 'center',
    borderColor: '#9883e5',
    borderWidth: 1,
  },
  functionText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#9883e5',
    fontSize: 18,
  },
  functionIcon: {
    fontSize: 32,
    color: '#9883e5',
    margin: 5,
  },
  cashContainer: {
    backgroundColor: '#9883e5',
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  cash: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    marginLeft: 5,
    color: '#000',
  },
  tfContainer: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  tfHeader: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tfPart: {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  tfCashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tfTitle: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    paddingVertical: 5,
  },
  tfNominal: {
    color: '#000',
    paddingVertical: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  tfDate: {
    color: 'grey',
    fontFamily: 'Montserrat-Regular',
  },
  tfDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreTfContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreTf: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  forwardIcon: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default AccountScreen;
