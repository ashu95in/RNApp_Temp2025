import React, {useState} from 'react';
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
import { signupApi } from '../../api/userAuthApi';
const SignUPScreen = ({navigation}) => {
  const {theme} = useTheme();
  const {colors} = theme;
  const [form, setform] = useState({}); //user data for signup

  const handleSubmite = async () => {
    const resp = await signupApi(form)
  };
  return (
    <View
      style={[styles.sectionContainer, {backgroundColor: colors.background}]}>
      <Text style={[styles.sectionTitle, {color: colors.text}]}>
        Create an account.
      </Text>
      <View style={styles.form}>
        <TextInput
          onChangeText={text => setform({...form, userName: text})}
          style={[
            styles.input,
            {backgroundColor: colors.inputBg, borderColor: colors.inputborder},
          ]}
          placeholder="Enter username "
        />
        <TextInput
          onChangeText={text => setform({...form, phNumber: text})}
          style={[
            styles.input,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.inputborder,
              color: colors.text,
            },
          ]}
          placeholder="Enter Phone number "
        />
        <TextInput
          onChangeText={text => setform({...form, password: text})}
          textContentType="Password"
          style={[
            styles.input,
            {backgroundColor: colors.inputBg, borderColor: colors.inputborder},
          ]}
          placeholder="Enter Password"
        />
        <TextInput
          onChangeText={text => setform({...form, college: text})}
          style={[
            styles.input,
            {backgroundColor: colors.inputBg, borderColor: colors.inputborder},
          ]}
          placeholder="Enter college"
        />
        <View style={styles.policy}>
          <Text
            style={[
              styles.creatActext,
              {
                color: colors.textSecondary,
              },
            ]}>
            By continuing, you agree to
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 500,
                textAlign: 'center',
              }}>
              privacy policy and Terms of use{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleSubmite}
          style={[{backgroundColor: colors.primary}, styles.btn]}>
          {true ? (
            <Text style={styles.btntext}>Create Account</Text>
          ) : (
            <ActivityIndicator color={'#fff'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={styles.creatAc}>
          <Text
            style={[
              styles.creatActext,
              {
                color: colors.textSecondary,
              },
            ]}>
            Already have an Account
          </Text>
          <Text
            style={{
              marginLeft: 10,
              textAlign: 'center',
              color: colors.primary,
              fontWeight: 800,
            }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUPScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 24,
    // justifyContent: 'start',
  },
  sectionTitle: {
    fontSize: rF(35),
    fontWeight: '600',
    width: rW(180),
    marginTop: 55,
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
    textAlignVertical: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontWeight: 400,
  },
  policy: {
    // borderWidth:1
  },
});
