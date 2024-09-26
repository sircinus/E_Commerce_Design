import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

const QRScanner = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <QRCodeScanner
          onRead={({data}) => {
            Alert.alert(data);
          }}
          reactivate={true}
          reactivateTimeout={5000}
          flashMode={RNCamera.Constants.FlashMode.torch}
          bottomContent={
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Scan Your QR Code Here!</Text>
              <TouchableOpacity
                style={styles.buttonTouchable}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 32,
    color: '#000',
    position: 'absolute',
    alignSelf: 'center',
    top: 25,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonTouchable: {
    paddingVertical: 50,
    borderRadius: 10,
    backgroundColor: '#b8dbd9',
  },
  bottomContainer: {
    position: 'absolute',
    top: 500,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#04724d',
    marginBottom: 70,
    fontSize: 24,
  },
});

export default QRScanner;
