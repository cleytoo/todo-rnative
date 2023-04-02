import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors['gray-500'],
    height: 52,
    flex: 1,
    borderRadius: 6,
    color: colors['gray-100'],
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1
  }
})
