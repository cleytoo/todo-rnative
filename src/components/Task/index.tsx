import { Text, TouchableOpacity, View } from 'react-native'
import Checkbox from 'expo-checkbox'

import { FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'
import { colors } from '../../theme'

interface TaskProps {
  task: {
    id: string
    title: string
    done: boolean
  }
  onComplete: () => void
  onRemove: () => void
}

export const Task = ({ task, onComplete, onRemove }: TaskProps) => {
  return (
    <View style={styles.task}>
      <Checkbox
        style={styles.checkbox}
        value={task.done}
        onValueChange={onComplete}
        color={task.done ? colors.purple : undefined}
      />
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[styles.taskTitle, task.done && styles.taskTitleDone]}
      >
        {task.title}
      </Text>

      <TouchableOpacity
        style={{
          height: 32,
          width: 32,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto'
        }}
        onPress={onRemove}
      >
        <FontAwesome name="trash-o" size={22} color={colors['gray-300']} />
      </TouchableOpacity>
    </View>
  )
}
