import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './UserArticles.style';
import Header from '../../../components/Header/Header';
import Card from '../../../components/Card/Card';
import {getUserArticles} from '../../../repositories/Article';
import { getUserById } from '../../../repositories/User';

const UserArticles = ({route}) => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const {userId} = route.params;

  const getUserAllArticles = async () => {
    const response = await getUserArticles(userId);
    const userResponse = await getUserById(userId);
    if (response.length > 0) {
      setData(response);
    }
    if (userResponse) {
      setUser(userResponse);
    }
  };

  useEffect(() => {
    getUserAllArticles();
  }, [userId]);

  return (
    <View style={styles.container}>
      <Header page={'UserArticles'} name={user?.full_name} />
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View
            style={{backgroundColor: '#FFD372', height: 1, marginTop: 20}}
          />
        )}
        renderItem={e => <Card data={e.item} />}
      />
    </View>
  );
};

export default UserArticles;
