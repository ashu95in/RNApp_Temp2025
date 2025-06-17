import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const ProfileScreen = () => {
  return (
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle} >ProfileScreen Screen</Text>
    </View>
    
  )
}

export default ProfileScreen


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