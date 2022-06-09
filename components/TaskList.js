import { Text, FlatList } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem'


export default function TaskList({ data }) {

  const renderItem = ({ item }) => {
    return <TaskItem item = {item}/>
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
    />
  )
}