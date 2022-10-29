import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Header.style';
import {useNavigation} from '@react-navigation/native';

const Header = ({page}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
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
          <Text style={styles.title}>{`< Elizabeth Rek`}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.titleContainer}>
          <Text style={styles.title}>{`<`}</Text>
        </TouchableOpacity>
      )}
      {page !== 'Profile' && (
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
    </View>
  );
};

export default Header;
