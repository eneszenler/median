import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import styles from './Profile.style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reduxSignOut} from '../../../redux/UserSlice';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const {userInfo} = useSelector(state => state.user);
  const data = JSON.parse(userInfo);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header page={'Profile'} />
      <View style={styles.content}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View>
          <TouchableOpacity style={styles.profileContainer} onPress={()=> setModalVisible(!modalVisible)}>
            <Image
              style={styles.profile}
              source={{
                uri: data?.pp_url,
              }}
            />
            <Icon name="add-circle-outline" style={styles.ppIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>
              <Icon name="person" size={28} />
            </Text>
            <Text style={styles.infoTitle}>{data?.full_name}</Text>
          </View>
          <View style={styles.line}></View>
          <View />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>
              <Icon name="badge" size={28} />
            </Text>
            <Text style={styles.infoTitle}>{data?.username}</Text>
          </View>
          <View style={styles.line}></View>
          <View />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.icon}>
              <Icon name="email" size={28} />
            </Text>
            <Text style={styles.infoTitle}>{data?.email}</Text>
          </View>
          <View />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('UserArticles', {userId: data?.id});
          }}>
          <Text style={styles.button}>My Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={async () => {
            await AsyncStorage.removeItem('user');
            dispatch(reduxSignOut());
          }}>
          <Text style={styles.button}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
