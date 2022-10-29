import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f3',
  },
  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 56,
    fontWeight: '500',
    color: '#283240',
  },
  titleSpan: {
    fontSize: 56,
    fontWeight: '500',
    color: '#FFD372',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 15,
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
