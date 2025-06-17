import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { rW, rH, rF } from '../../utils/deviceDimensions';

const ForgetPasswordScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { colors } = theme;

  const [identifier, setIdentifier] = useState('');

  const handleSendOtp = () => {
    if (!identifier.trim()) {
      Alert.alert('Missing Input', 'Please enter your username or phone number.');
      return;
    }

    // TODO: Call your API to send OTP
    console.log('Sending OTP to:', identifier);
    navigation.navigate('Otp'); // or wherever the next step is
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Forgot Password
      </Text>

      <Text style={[styles.subtext, { color: colors.textSecondary }]}>
        Enter your registered username or phone number to receive an OTP.
      </Text>

      <View style={styles.form}>
        <TextInput
          value={identifier}
          onChangeText={setIdentifier}
          style={[
            styles.input,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.inputborder,
              color: colors.text,
            },
          ]}
          placeholder="Username or Phone Number"
          placeholderTextColor={colors.placeholder || '#aaa'}
        />

        <TouchableOpacity
          onPress={handleSendOtp}
          style={[styles.btn, { backgroundColor: colors.primary }]}>
          <Text style={styles.btnText}>Send OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginRedirect}
          onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.backToLogin, { color: colors.primary }]}>
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: rF(30),
    fontWeight: '700',
    marginBottom: 10,
  },
  subtext: {
    fontSize: rF(14),
    marginBottom: 30,
    width: '100%',
  },
  form: {
    gap: rH(20),
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: rW(15),
    fontSize: rF(16),
  },
  btn: {
    padding: rH(12),
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: rF(18),
    fontWeight: '600',
  },
  loginRedirect: {
    marginTop: 20,
    alignItems: 'center',
  },
  backToLogin: {
    fontSize: rF(14),
    textDecorationLine: 'underline',
  },
});
