import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dot: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#FFF',
  },
  filled: {
    backgroundColor: '#FFF',
  },
  hidden: {
    height: 0,
    width: 0,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
