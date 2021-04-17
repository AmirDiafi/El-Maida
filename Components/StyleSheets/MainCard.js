import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: '#f8f1f1',
    margin: 10,
    marginHorizontal: 30,
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Cairo-Regular',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  detailsContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    flexWrap: 'wrap',
  },
  details: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    margin: 5,
    fontFamily: 'Cairo-Regular',
  },
})

export default Styles
