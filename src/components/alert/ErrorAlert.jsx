import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ErrorAlert = ({ message }) => {
  if (!message) return null;

  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={20} color="#D32F2F" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDECEA',
    borderColor: '#F5C6CB',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  message: {
    color: '#D32F2F',
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
    fontWeight: '500',
  },
});

export default ErrorAlert;
