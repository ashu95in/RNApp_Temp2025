import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const HomeScreen = () => {
  return (
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle} >HomeScreen Screen</Text>
    </View>
    
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:"#fff",
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  
});