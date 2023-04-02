import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'
import { colors } from '../../theme'
import { useState } from 'react'

export const Input = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = () => setIsFocused(true)
  const handleInputBlur = () => setIsFocused(false)

  return (
    <TextInput
      style={[
        styles.input,
        { borderColor: isFocused ? colors['purpleDark'] : colors['gray-700'] }
      ]}
      placeholderTextColor={colors['gray-300']}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      {...props}
    />
  )
}
