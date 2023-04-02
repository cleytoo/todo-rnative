import { StyleSheet } from 'react-native'
import { colors } from '../../theme/'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 170,
    backgroundColor: colors['gray-700'],
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    backgroundColor: colors['gray-600'],
    paddingHorizontal: 20
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: -30
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  counterText: {
    fontWeight: 'bold'
  },
  counterValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
