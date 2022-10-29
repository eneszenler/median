import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Home.style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import Card from '../../../components/Card/Card';
import { getArticles } from '../../../repositories/Article';

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

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState()

  const getData =async () => {
    const response = await getArticles()
    console.log("asd",response);
    if(response){
      setData(response)
    }
  }

  useEffect( () => {
   getData()
  }, [])
  

  return (
    <View style={styles.container}>
      <Header page={'Home'} />
      <FlatList
        data={data}
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

export default Home;
