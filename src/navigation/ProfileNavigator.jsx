import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/userManage/ProfileScreen";
import ProfileEditeScreen from "../screens/userManage/ProfileEditeScreen";

const Stack = createNativeStackNavigator() ;

const ProfileNavigator = ()=> {
return (
    <Stack.Navigator>
       <Stack.Screen name="'Profile" component={ProfileScreen}/> 
         <Stack.Screen name="EditeProfile" component={ProfileEditeScreen} />

    </Stack.Navigator>
)

}