import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9500',
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 120,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        padding: 150,
      },
      button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        width: '70%',
      },
  })

  export default styles;