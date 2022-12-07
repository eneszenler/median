import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Header.style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const Header = ({page}) => {
  const { userInfo } = useSelector((res) => res.user)
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(require('../../../assets/avatars/1.png'))

  const dim = Dimensions.get('window');

  const arr = [
    {
      number: 1,
      avatarPath: require('../../../assets/avatars/1.png'),
    },
    {
      number: 2,
      avatarPath: require('../../../assets/avatars/2.png'),
    },
    {
      number: 3,
      avatarPath: require('../../../assets/avatars/3.png'),
    },
    {
      number: 4,
      avatarPath: require('../../../assets/avatars/4.png'),
    },
    {
      number: 5,
      avatarPath: require('../../../assets/avatars/5.png'),
    },
    {
      number: 6,
      avatarPath: require('../../../assets/avatars/6.png'),
    },
  ];

  return (
    <View style={styles.header}>
      {/* <Modal
        style={styles.modal}
        onBackdropPress={()=> setModalVisible(!modalVisible)}
        isVisible={modalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            height: dim.height * 0.5,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{flex: 0.8, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
              style={{flex: 1}}
              numColumns={3}
              data={arr}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedAvatar(item.number);
                    }}
                    style={{
                      padding: 11,
                      borderWidth: selectedAvatar === item.number ? 1 : 0,
                      margin: 10,
                      borderRadius: 10,
                      borderColor: '#372D79',
                    }}>
                    <Image
                      source={item.avatarPath}
                      style={{
                        height: dim.height * 0.15,
                        width: dim.width * 0.2,
                        resizeMode: 'center',
                      }}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal> */}
      {page === 'Home' ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.titleContainer}>
          <Text style={styles.title}>Medi</Text>
          <Text style={styles.titleSpan}>an</Text>
        </TouchableOpacity>
      ) : page === 'UserArticles' ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.titleContainer}>
          <Icon style={{marginEnd: 10}} name="west" size={28} />
          <Text style={styles.userTitle}>User Articles</Text>
        </TouchableOpacity>
      ) : page === 'ArticleDetail' ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.titleContainer}>
          <Icon style={{marginEnd: 10}} name="west" size={28} />
          <Text style={styles.userTitle}>Article Detail</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.titleContainer}>
          <Icon style={{marginEnd: 10}} name="west" size={28} />
          <Text style={styles.userTitle}>User Profile</Text>
        </TouchableOpacity>
      )}
      {page !== 'Profile' && page !== 'Home' && (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.profile}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      {page === 'Home' && (
        <View style={styles.home}>
          <TouchableOpacity
            style={{marginEnd: 10}}
            onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="add-box" size={48} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.profile}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
