import {
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './SignIn.style';
import Input from '../../components/Input/Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email && password) {
      console.log(email, password);
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
