import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Logo from '../assets/oasisLogo.png';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 5000);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.subText}>Where shopping is a breeze</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: '25%',
  },
  subText: {
    fontSize: 20,
    color: '#009765',
    position: 'absolute',
    top: '50%',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default SplashScreen;
