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

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

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
          placeholder="Password"
          placeholderTextColor="grey"
          style={styles.inputContainer}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.passText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.seperatorLine}></View>

      <TouchableOpacity>
        <View style={styles.otherLoginContainer}>
          <Icon2 name="google" style={styles.iconLogin} />
          <Text style={styles.otherLoginText}>Log In With Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.otherLoginContainer}>
          <Icon name="facebook" style={styles.iconLogin} />
          <Text style={styles.otherLoginText}>Log In With Facebook</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.signUpLink}>Sign up here!</Text>
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
    height: 250,
    alignSelf: 'center',
  },
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    flex: 1,
    borderBottomWidth: 3,
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
  passText: {
    textAlign: 'right',
    marginTop: 30,
    fontFamily: 'Montserrat-Regular',
    marginRight: 10,
    color: '#4886E8',
    fontSize: 18,
  },
  seperatorLine: {
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    fontSize: 18,
  },
  signUpLink: {
    fontFamily: 'Montserrat-Regular',
    color: '#4886E8',
    fontSize: 18,
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
});
export default LoginScreen;
