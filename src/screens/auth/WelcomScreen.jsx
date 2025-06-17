import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {rW, rH, rF} from '../../utils/deviceDimensions';
import {useTheme} from '../../context/ThemeContext';

const WelcomScreen = ({navigation}) => {
  const {theme} = useTheme();
  const {colors} = theme;
  return (
    <View
      style={[styles.sectionContainer, {backgroundColor: colors.background}]}>
      <View style={styles.imgCont}>
        <Image
          style={styles.img}
          source={require('../../assets/image/splash_image_1.png')}></Image>
      </View>
      <View style={styles.textsection}>
        <Text style={[styles.sectionTitle, {color: colors.text}]}>
          Welcom to book markets
        </Text>
        <Text style={[styles.subtitle, {color: colors.textSecondary}]}>
          Buy and sell book in easy way find near by make contacts etc.
        </Text>
      </View>
      <View style={styles.btncont}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[{backgroundColor: colors.primary}, styles.btn]}>
          <Text style={styles.btntext}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={[{backgroundColor: colors.primary}, styles.btn]}>
          <Text style={styles.btntext}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    gap: rH(25),
  },
  sectionTitle: {
    fontSize: rF(30),
    fontWeight: '600',
    textAlign: 'center',
  },
  imgCont: {
    width: rW(350),
    height: rW(350),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: rW(300),
    height: rW(350),
  },
  textsection: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center',
    width: rW(250),
    fontWeight: 500,
    marginTop:5
  },
  btncont: {
    padding: rW(10),
    display: 'flex',
    justifyContent: 'center',
    gap: 25,
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
});
