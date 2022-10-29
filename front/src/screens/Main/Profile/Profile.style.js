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
  content: {
    flex:0.8,
    justifyContent:"center"
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {},
  infoTitle: {
    justifyContent: 'flex-start',
    fontSize: 18,
    opacity: 0.7,
  },
  line: {
    marginVertical: 10,
    borderWidth: 0.6,
    borderColor: '#FFD372',
  },
  buttonContainer: {
    width: '87%',
    marginTop: 30,
    marginBottom: -20,
    marginStart:30,
    marginEnd:30,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#FFD372',
    alignItems:"center"
  },
  button: {
    fontSize: 20,
    color: '#fff',
  },
});
