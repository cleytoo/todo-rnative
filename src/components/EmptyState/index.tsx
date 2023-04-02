import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import { colors } from '../../theme'

export const EmptyState = () => {
  return (
    <View style={styles.empty}>
      <Image source={require('../../../assets/empty.png')} />
      <Text
        style={{
          color: colors['gray-300'],
          fontWeight: 'bold',
          marginTop: 20,
          fontSize: 16
        }}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={{ color: colors['gray-300'], fontSize: 16 }}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
