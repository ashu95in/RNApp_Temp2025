import React from 'react'
import { NavigationContainer,ActivityIndicator  } from '@react-navigation/native' ;
import MainNavigator from './MainNavigator ';
import AuthNavigator from './AuthNavigator ';
import { useAuthStore } from '../store/useAuthStore';
// const isLoggedIn = false ;

const RootNavigation = () => {
  const {isLoggedIn} = useAuthStore();
  const {isHydrated} = useAuthStore();
  const user = useAuthStore();

  // if (!isHydrated) {
  //   return <ActivityIndicator style={{color:'black'}} />;
  // }
  return (
    <NavigationContainer>
          {!isLoggedIn?<MainNavigator/>:<AuthNavigator/>}
    </NavigationContainer>
  )
}

export default RootNavigation