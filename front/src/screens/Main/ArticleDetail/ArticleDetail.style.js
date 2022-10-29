import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f3',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 60,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#FFD372',
    shadowColor: '#FFD372',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#283240',
  },
  titleSpan: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
  },
  proileContainer: {},
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
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
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
},
cardDescriptionContainer:{
  marginTop:15
},
cardDescription:{
  fontSize:16
}
});
