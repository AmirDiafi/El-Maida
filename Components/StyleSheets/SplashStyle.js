import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16697a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 100,
    marginBottom: 25,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 28,
    color: '#eaeaea',
    fontFamily: 'Cairo-Regular',
  },
  desc: {
    marginBottom: 50,
    textAlign: 'center',
    width: '90%',
    fontSize: 18,
    color: '#eaeaea',
    fontFamily: 'Cairo-Regular',
  },
  buttonContainer: {
    backgroundColor: '#ffa62b',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#080101',
    fontSize: 20,
    marginRight: 10,
    fontFamily: 'Cairo-Regular',
  },
})

export default Styles
