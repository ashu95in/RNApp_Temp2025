import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/businessLogic/HomeScreen";
import FindBookScreen from "../screens/businessLogic/FindBookScreen";
import SellBookScreen from "../screens/businessLogic/SellBookScreen";
import ExtScreen from "../screens/businessLogic/ExtScreen";

const Tab = createBottomTabNavigator(); 

const MainNavigator  = () =>{

  return (

    <Tab.Navigator>
         <Tab.Screen  name="Home" component={HomeScreen} />
         <Tab.Screen name="findBook"  component={FindBookScreen}/>
         <Tab.Screen name ="SellBook" component={SellBookScreen} />
         <Tab.Screen name="ExtSreen" component={ExtScreen} /> 
    </Tab.Navigator>
  )
}

export  default MainNavigator ;