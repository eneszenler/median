import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginStart: 30,
    marginEnd: 30,
  },
  cardHeader: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  cardProfileContainer: {
    marginEnd: 15,
  },
  cardProfile: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  cardName: {
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 4,
  },
  cardDate: {
    opacity: 0.5,
  },
  cardContent: {
    marginTop: 20,
  },
  cardImageContainer: {},
  cardImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  cardTitleContainer: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
});
