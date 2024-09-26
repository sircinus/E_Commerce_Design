import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../assets/oasisLogo.png';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.fieldContainer}>
        <Icon name="phone" style={styles.icon} />
        <TextInput
          secureTextEntry
          placeholder="Telephone Number"
          placeholderTextColor="grey"
          style={styles.inputContainer}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Icon name="user" style={styles.icon} />
        <TextInput
          secureTextEntry
          placeholder="Username"
          placeholderTextColor="grey"
          style={styles.inputContainer}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Icon name="email" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="grey"
          style={styles.inputContainer}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          secureTextEntry
          placeholder="Create Password"
          placeholderTextColor="grey"
          style={styles.inputContainer}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Icon name="lock-open" style={styles.icon} />
        <TextInput
          secureTextEntry
          placeholder="Retype Password"
          placeholderTextColor="grey"
          style={styles.inputContainer}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.seperatorLine}></View>

      <TouchableOpacity>
        <View style={styles.otherLoginContainer}>
          <Icon2 name="google" style={styles.iconLogin} />
          <Text style={styles.otherLoginText}>Sign Up With Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.otherLoginContainer}>
          <Icon name="facebook" style={styles.iconLogin} />
          <Text style={styles.otherLoginText}>Sign Up With Facebook</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.LoginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.LoginLink}>Log in here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B8D8D9',
    flex: 1,
  },
  logo: {
    width: 300,
    height: 150,
    alignSelf: 'center',
  },
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    flex: 1,
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontFamily: 'Montserrat-Regular',
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    verticalAlign: 'middle',
    marginLeft: 15,
    fontSize: 24,
    color: 'black',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#04724d',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: '#f4f4f9',
  },
  seperatorLine: {
    borderBottomWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  otherLoginContainer: {
    backgroundColor: '#f4f4f9',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#9883e5',
  },
  iconLogin: {
    margin: 10,
    color: '#9883e5',
    fontSize: 32,
  },
  otherLoginText: {
    color: '#9883e5',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  LoginText: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    fontSize: 18,
  },
  LoginLink: {
    fontFamily: 'Montserrat-Regular',
    color: '#4886E8',
    fontSize: 18,
  },
});

export default RegisterScreen;
