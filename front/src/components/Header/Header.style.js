import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
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
      height: 1,
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
});
