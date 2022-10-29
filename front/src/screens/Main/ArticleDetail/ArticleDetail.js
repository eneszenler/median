import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './ArticleDetail.style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header/Header';

const ArticleDetail = ({route}) => {
  const navigation = useNavigation();
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('UserArticles')}>
            <View style={styles.cardHeader}>
              <View style={styles.cardProfileContainer}>
                <Image
                  style={styles.cardProfile}
                  source={{
                    uri: data?.owner?.pp_url,
                  }}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{data?.owner?.full_name}</Text>
                <Text style={styles.cardDate}>{data?.created_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.cardContent}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>
                {data?.title}
              </Text>
            </View>
            <View style={styles.cardImageContainer}>
              <Image
                style={styles.cardImage}
                source={{
                  url: data?.image_url,
                }}
              />
            </View>
            <View style={styles.cardDescriptionContainer}>
              <Text style={styles.cardDescription}>
                {data?.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleDetail;
