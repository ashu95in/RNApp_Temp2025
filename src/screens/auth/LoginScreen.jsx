import React, {userState, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import {rW, rH, rF} from '../../utils/deviceDimensions';
import {useAuthStore} from '../../store/useAuthStore';
import { loginApi } from '../../api/userAuthApi';
import ErrorAlert from './components/ErrorAlert';

const LoginScreen = ({navigation}) => {
  // store states 
  const {theme} = useTheme();
  const {login} = useAuthStore();
  const {colors} = theme;
  
  
  const [form, setForm] = useState({});

  const handleLogin = async () => {
    const isError = varifyForm(form);
    if (isError.status) return false;         //varify form 
    
    try {
      //hit api for token
      const resp  = await loginApi(form)

      //if login success
      if(false) {
        alert('login failed')
      } 
      login({name: 'admin', type: 'test'});
    } catch (error) {
      alert('error found');
    }
  };
  const varifyForm = () => {
    return false;
  };
  return (
    <View
      style={[styles.sectionContainer, {backgroundColor: colors.background}]}>
      <Text style={[styles.sectionTitle, {color: colors.text}]}>
        Welcome Back!
      </Text>
      <View style={styles.form}>
      <ErrorAlert message={"error ound"} />
        <TextInput
          onChangeText={text => setForm({...form, userId: text})}
          style={[
            styles.input,
            {backgroundColor: colors.inputBg, borderColor: colors.inputborder},
          ]}
          placeholder="Enter username or phone Number"
        />
        <TextInput
          onChangeText={text => setForm({...form, password: text})}
          textContentType="Password"
          style={[
            styles.input,
            {backgroundColor: colors.inputBg, borderColor: colors.inputborder},
          ]}
          placeholder="Enter Password"
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              marginLeft: 'auto',
              color: colors.primary,
              fontWeight: 500,
              width: rW(120),
            }}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          style={[{backgroundColor: colors.primary}, styles.btn]}>
          {!true ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={styles.btntext}>Log In</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.creatAc}>
          <Text
            style={[
              styles.creatActext,
              {
                color: colors.primary,
                color: colors.textSecondary,
              },
            ]}>
            Create An account
          </Text>
          <Text
            style={{
              marginLeft: 10,
              textAlign: 'center',
              color: colors.primary,
              fontWeight: 800,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: rF(35),
    fontWeight: '600',
    width: rW(150),
  },
  form: {
    marginTop: 50,
    height: rH(350),
    gap: rH(20),
  },
  input: {
    borderWidth: 1,
    padding: rW(15),
    borderRadius: 10,
  },
  btn: {
    padding: rW(10),
    borderRadius: 10,
  },
  btntext: {
    color: '#fff',
    fontWeight: 500,
    fontSize: rF(20),
    textAlign: 'center',
  },
  creatAc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  creatActext: {
    textAlign: 'center',
    fontWeight: 500,
  },
});
