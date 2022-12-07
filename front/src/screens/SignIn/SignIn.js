import {
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './SignIn.style';
import Input from '../../components/Input/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { reduxSignIn } from "../../redux/UserSlice";
import { signIn } from "../../repositories/User";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (email && password) {
      const response = await signIn(email, password);
      if (response.code === 201) {
        const jsonValue = JSON.stringify(response.data);
        await AsyncStorage.setItem('user', jsonValue);
        dispatch(reduxSignIn(jsonValue));
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('Failed', 'Email or password wrong!');
        setEmail('');
        setPassword('');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Medi</Text>
        <Text style={styles.titleSpan}>an</Text>
      </View>
      <View style={styles.content}>
        <Input
          onChangeText={e => setEmail(e)}
          placeholder="E-mail"
          defaultValue={email}
        />
        <Input
          onChangeText={e => setPassword(e)}
          placeholder="Password"
          defaultValue={password}
          securityPassword
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate('SignUp')}>
          I Don't Have An Account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
