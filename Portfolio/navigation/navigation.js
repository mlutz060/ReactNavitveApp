import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation';
//import screens
import { Landing } from "./screens/landing";
import { Home } from "./screens/home";
import { Resume } from "./screens/resume";
import { Contact } from "./screens/contact";
import { Hobbies } from "./screens/hobbies";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MainTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Resume" component={Resume}/>
            <Tab.Screen name="Contact" component={Contact}/>
            <Tab.Screen name="Hobbies" component={Hobbies}/>
        </Tab.Navigator>
    )
}

function HobbiesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="" />
            
        </Stack.Navigator>
    )
}


module.exports = {
    HomeStack,
    MainTab,
    HobbiesStack
}