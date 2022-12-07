import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Card.style';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const Card = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('UserArticles', {userId: data?.author?.id})
        }>
        <View style={styles.cardHeader}>
          <View style={styles.cardProfileContainer}>
            <Image
              style={styles.cardProfile}
              source={{
                uri: data?.author?.pp_url,
              }}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>{data?.author?.full_name}</Text>
            <Text style={styles.cardDate}>
              {moment(data?.createdAt).format('DD MMMM YYYY')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ArticleDetail', {data: data})}>
        <View style={styles.cardContent}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={{
                url: data?.image_url,
              }}
            />
          </View>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{data?.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
