import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { rW, rH, rF } from '../../utils/deviceDimensions';

const OtpScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { colors } = theme;

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    let countdown;
    if (isResendDisabled && timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }
    if (timer === 0) {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(countdown);
  }, [timer, isResendDisabled]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    if (index === 5 && text) Keyboard.dismiss();
  };

  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join('');
    console.log('Entered OTP:', finalOtp);
    navigation.navigate('Login');
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    // Add your API call here

    setTimer(60);
    setIsResendDisabled(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Enter OTP</Text>

      <View style={[styles.otpContainer]}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.otpInput,
              {
                backgroundColor: colors.background,
                borderColor: colors.inputborder,
                color: colors.text,
              },
            ]}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent.key, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        {isResendDisabled ? (
          <Text style={{ color: colors.text }}>
            Resend OTP in <Text style={{ fontWeight: 'bold' }}>{timer}s</Text>
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={[styles.resendText, { color: colors.primary }]}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: rF(28),
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: rW(45),
    height: rW(55),
    borderBottomWidth:2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: rF(22),
    fontWeight: 'bold',
  },
  button: {
    padding: rH(14),
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: rF(18),
    textAlign: 'center',
    fontWeight: '600',
  },
  resendContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  resendText: {
    fontSize: rF(15),
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
