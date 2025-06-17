import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const FindBookScreen = () => {
  return (
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle} >FindBookScreen Screen</Text>
    </View>
    
  )
}

export default FindBookScreen


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