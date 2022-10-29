import {View, Text, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './UserArticles.style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import Card from '../../../components/Card/Card';

const arr = [
  {
    image_url: 'https://miro.medium.com/max/1200/1*9UN-8OUzyVJBaKiVNX5dig.png',
    title: '15 Best Practices for First Voice Call Resolution',
    description: 'description',
    created_date: '1666803192522',
    owner: {
      id: 1,
      full_name: 'Elizabeth Rek',
      pp_url: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  },
];

const UserArticles = ({route}) => {
  const navigation = useNavigation();
  
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <Header page={'UserArticles'} />
      <FlatList
        data={arr}
        ItemSeparatorComponent={() => (
          <View
            style={{backgroundColor: '#FFD372', height: 1, marginTop: 20}}
          />
        )}
        renderItem={(e) => <Card data={e.item}/>}
      />
    </View>
  );
};

export default UserArticles;
