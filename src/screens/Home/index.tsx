import { useState } from 'react'
import * as Crypto from 'expo-crypto'
import { Text, View, Image, FlatList, Alert, Keyboard } from 'react-native'

import { styles } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { colors } from '../../theme'
import { EmptyState } from '../../components/EmptyState'
import { Task } from '../../components/Task'

interface Task {
  id: string
  title: string
  done: boolean
}

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return Alert.alert('Opa', 'Digite o nome da tarefa')
    }
    const task = {
      id: Crypto.randomUUID(),
      title: newTask,
      done: false
    }
    setTasks((oldState) => [...oldState, task])
    setNewTask('')
    Keyboard.dismiss()
  }

  const handleCompleteTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    )
    setTasks(updatedTasks)
  }

  const handleRemoveTask = (id: string) => {
    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Sim',
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id)
            setTasks(updatedTasks)
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  const created = tasks.length
  const completed = tasks.filter((task) => task.done).length || 0

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChangeText={setNewTask}
          />
          <Button onPress={handleAddTask} />
        </View>

        <View style={styles.counterWrapper}>
          <View style={styles.counter}>
            <Text style={[styles.counterText, { color: colors.blue }]}>
              Criadas
            </Text>
            <View
              style={{
                backgroundColor: colors['purpleDark'],
                padding: 2,
                borderRadius: 99999999
              }}
            ></View>
            <Text style={styles.counterValue}>{created}</Text>
          </View>
          <View style={styles.counter}>
            <Text style={[styles.counterText, { color: colors.purple }]}>
              Concluidas
            </Text>
            <View
              style={{
                backgroundColor: colors['purpleDark'],
                padding: 2,
                borderRadius: 99999999
              }}
            ></View>
            <Text style={styles.counterValue}>{completed}</Text>
          </View>
        </View>

        <FlatList
          style={{ marginTop: 32 }}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              task={item}
              onComplete={() => handleCompleteTask(item.id)}
              onRemove={() => handleRemoveTask(item.id)}
            />
          )}
          ListEmptyComponent={<EmptyState />}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
