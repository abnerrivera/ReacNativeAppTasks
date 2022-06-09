import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({item}) => {
  return (
    <View style={styles.itemConatiner}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  itemConatiner: {
    marginBottom: 10,
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 15,
    color: 'white',
  },
  itemTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'white',
    fontSize: 10,
  }
})