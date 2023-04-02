import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export const styles = StyleSheet.create({
  task: {
    backgroundColor: colors['gray-500'],
    borderWidth: 2,
    borderColor: colors['gray-400'],
    borderRadius: 8,
    gap: 16,
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 12,
    alignItems: 'center'
  },
  taskTitle: {
    color: colors['gray-100'],
    flex: 1
  },
  taskTitleDone: {
    color: colors['gray-300'],
    textDecorationLine: 'line-through'
  },
  checkbox: {
    borderRadius: 9999,
    borderColor: colors.blue,
    height: 26,
    width: 26
  }
})
