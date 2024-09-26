import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Ionicons';

import SplashScreen from './src/SplashScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import HomeScreen from './src/HomeScreen';
import PayScreen from './src/PayScreen';
import NotifScreen from './src/NotifScreen';
import AccountScreen from './src/AccountScreen';
import FeedScreen from './src/FeedScreen';
import AccountInfoScreen from './src/AccountInfoScreen';
import QRScannerScreen from './src/QRScannerScreen';
import WishlistScreen from './src/WishlistScreen';
import CartScreen from './src/CartScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#9883E5',
        headerShown: false,
        tabBarBadgeStyle: {
          backgroundColor: '#b8dbd9',
          fontFamily: 'Montserrat-Bold',
        },
        tabBarStyle: {
          tabBarInactiveTintColor: 'black',
          backgroundColor: '#f4f4f9',
          height: 60,
          padding: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 5,
          fontFamily: 'Montserrat-SemiBold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
        }}
      />

      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          tabBarLabel: 'Pay',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <Icon3 name="wallet-outline" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarBadge: 'New',
          tabBarLabel: 'Feed',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <Icon3 name="newspaper-outline" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotifScreen}
        options={{
          tabBarBadge: '3',
          tabBarLabel: 'Notifications',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <Icon2 name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={RootHome} />
        <Stack.Screen name="AccountInfoScreen" component={AccountInfoScreen} />
        <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
