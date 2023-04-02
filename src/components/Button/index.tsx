import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from './styles'

export const Button = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Ionicons name="add-circle-outline" size={32} color="#fff" />
    </TouchableOpacity>
  )
}
