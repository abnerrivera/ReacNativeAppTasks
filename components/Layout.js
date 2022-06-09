import React from 'react'
import { View, StyleSheet} from 'react-native'

const Layout = ({ children }) => {
  return (
      <View style={styles.container}>
        {children}
      </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#222f3e',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})