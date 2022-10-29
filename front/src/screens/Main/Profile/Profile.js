import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './Profile.style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header/Header';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header page={'Profile'} />
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>icon</Text>
            <Text style={styles.infoTitle}>Enes Zenler</Text>
          </View>
          <View style={styles.line}></View>
          <View />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>icon</Text>
            <Text style={styles.infoTitle}>eneszenler</Text>
          </View>
          <View style={styles.line}></View>
          <View />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>icon</Text>
            <Text style={styles.infoTitle}>yusufeneszenler@gmail.com</Text>
          </View>
          <View style={styles.line}></View>
          <View />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>icon</Text>
            <Text style={styles.infoTitle}>Enes Zenler</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('UserArticles', {userId: '1'});
          }}>
          <Text style={styles.button}>My Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.button}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
