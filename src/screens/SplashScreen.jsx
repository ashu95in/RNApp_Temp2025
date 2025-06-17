import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SplashScreen = () => {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Text style={[styles.logo]}>Books Market</Text>
      {/* <Text style={[styles.text]}>Loading App...</Text>
      <ActivityIndicator size="large" style={{color:"#fff"}} /> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
  fontSize:50,
  fontWeight:500,
  color:'#fff'
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color:"#ffff"
  },
});
