import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import ReadMore from '@fawazahmed/react-native-read-more';

import kellogg from '../assets/kellogg.png';
import costco from '../assets/costco.jpg';
import asus from '../assets/asus.webp';
import advan from '../assets/advan.png';
import dior from '../assets/Dior.jpg';
import zenbook from '../assets/zen.jpg';
import diorPost from '../assets/diorPost.jpg';

import Icon from 'react-native-vector-icons/Ionicons';

const FeedScreen = () => {
  const dataImageProfile = [
    {
      id: 1,
      image: kellogg,
      name: 'KELLOGG',
    },
    {
      id: 2,
      image: costco,
      name: 'COSTCO',
    },
    {
      id: 3,
      image: asus,
      name: 'ASUS',
    },
    {
      id: 4,
      image: advan,
      name: 'ADVAN',
    },
    {
      id: 5,
      image: dior,
      name: 'DIOR',
    },
  ];
  const dataContent = [
    {
      id: 1,
      image: asus,
      name: 'ASUS',
      contentImage: zenbook,
      desc: 'Colorful, portable, and intelligently driven. #Zenbook 14 OLED(UX3405) is redefining the laptop experience with its AI-powered brilliance. It’s the first generation of AI PC! 🎨🧠',
      date: '31 November 2023 09:11',
    },
    {
      id: 2,
      image: dior,
      name: 'Dior',
      contentImage: diorPost,
      desc: 'A passionate tribute to the arts: this stunning shoot from #DiorMagazine 44 showcases #DiorIcons silhouettes from the #DiorSpring24 collection by @MrKimJones, celebrating the Buffalo aesthetic of cult stylist Ray Petri fusing culture with streetwear.',
      date: '30 November 2023 19:23',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Feed</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.allProfileContainer}>
        {dataImageProfile.map((item, index) => {
          console.log(item);
          return (
            <TouchableOpacity style={styles.imageContainer} key={index}>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {dataContent.map((itemContent, index) => {
          console.log(itemContent);
          return (
            <View style={styles.content} key={index}>
              <View style={styles.contentProfile}>
                <Image
                  source={itemContent.image}
                  style={styles.contentProfileImage}
                />
                <Text style={styles.contentName}>{itemContent.name}</Text>
              </View>
              <Image
                source={itemContent.contentImage}
                style={styles.contentImage}
              />
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <Icon name="heart-outline" style={styles.contentIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="chatbox-outline" style={styles.contentIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="share-social-outline"
                    style={styles.contentIcon}
                  />
                </TouchableOpacity>
              </View>

              <ReadMore
                seeMoreStyle={{color: 'grey'}}
                seeLessStyle={{color: 'grey'}}
                numberOfLines={3}
                style={styles.addressText}>
                {itemContent.desc}
              </ReadMore>
              <Text style={styles.contentDate}>{itemContent.date}</Text>
            </View>
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
    marginLeft: 15,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  allProfileContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    height: 130,
    gap: 10,
  },
  imageContainer: {
    width: 90,
    height: 100,
  },
  profileImage: {
    resizeMode: 'cover',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: 'center',
    borderColor: 'green',
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    textAlign: 'center',
    width: '100%',
    fontSize: 12,
    marginVertical: 5,
  },
  contentContainer: {
    marginHorizontal: 10,
    gap: 20,
    paddingVertical: 10,
  },
  contentProfile: {
    flexDirection: 'row',
    backgroundColor: '#b8dbd9',
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  contentProfileImage: {
    width: 50,
    height: 50,
    marginLeft: 5,
    borderRadius: 50,
  },
  contentName: {
    alignSelf: 'center',
    marginLeft: 5,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 18,
  },
  contentImage: {
    width: 380,
    height: 380,
    resizeMode: 'cover',
  },
  contentDesc: {
    backgroundColor: '#b8dbd9',
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    padding: 10,
    textAlign: 'justify',
  },
  contentDate: {
    backgroundColor: '#b8dbd9',
    color: 'grey',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingBottom: 10,
    textAlign: 'justify',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentIcon: {
    color: '#000',
    fontSize: 32,
    marginTop: 15,
    marginLeft: 5,
  },
  iconContainer: {
    backgroundColor: '#b8dbd9',
    flexDirection: 'row',
    gap: 5,
  },
  addressText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#000',
    padding: 10,
    backgroundColor: '#b8dbd9',
    textAlign: 'justify',
  },
});

export default FeedScreen;
