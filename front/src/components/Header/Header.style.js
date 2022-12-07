import {StyleSheet, Dimensions} from 'react-native';

const dim = Dimensions.get('window')

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
    minHeight:120,
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
  userTitle: {
    fontSize: 28,
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
  home:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
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
    marginStart: 30,
    marginEnd: 30,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#FFD372',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    color: '#fff',
  },
  modal:{
    flex: 1, 
    justifyContent: 'flex-end', 
    width: dim.width * 1, 
    margin: 0 
}
});
