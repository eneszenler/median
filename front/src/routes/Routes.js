import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import Home from '../screens/Main/Home/Home';
import ArticleDetail from '../screens/Main/ArticleDetail/ArticleDetail';
import UserArticles from '../screens/Main/UserArticles/UserArticles';
import Profile from '../screens/Main/Profile/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { reduxSignIn } from '../redux/UserSlice';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const {userInfo} = useSelector(state => state.user);
  const [localData, setLocalData] = useState();
  const dispatch = useDispatch();

  const getLocal = async () => {
    const value = await AsyncStorage.getItem('user');
    const local = value ? JSON.stringify(value) : null;
    setLocalData(local);
  };

  useEffect(() => {
    getLocal();
  }, [userInfo]);

  return (
    <Stack.Navigator >
      {!localData ? (
        <>
          <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn} />
          <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="ArticleDetail" component={ArticleDetail} />
          <Stack.Screen options={{headerShown: false}} name="UserArticles" component={UserArticles} />
          <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
