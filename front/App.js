import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn/SignIn';
import SignUp from './src/screens/SignUp/SignUp';
import Home from './src/screens/Main/Home/Home';
import ArticleDetail from './src/screens/Main/ArticleDetail/ArticleDetail';
import UserArticles from './src/screens/Main/UserArticles/UserArticles';
import Profile from './src/screens/Main/Profile/Profile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ArticleDetail"
          component={ArticleDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UserArticles"
          component={UserArticles}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
