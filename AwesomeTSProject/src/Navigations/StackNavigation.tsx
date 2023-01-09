import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Screens/Home';
import Franchise from '../Screens/Menus/Franchise';
import OneFlusMenu from '../Screens/Menus/OnePlusMenu';

const Stack = createStackNavigator();
export function StackNavigation( props: any) {
    return (
        <Stack.Navigator initialRouteName="Franchise">
            <Stack.Screen
                name="Home"
                component={ Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Franchise"
                component={ Franchise}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="OnePlusMenu"
                component={ OneFlusMenu}
                options={{ headerShown: false}}
                // options={( props:any) => ({
                //     headerRight: () => (
                //         <TouchableOpacity style={{ paddingHorizontal:10}} onPress = {() => props.navigation.navigate ("Home", {})}>
                //             <Text style={{ fontSize:17, fontWeight:'600'}}>Home</Text>
                //         </TouchableOpacity>
                //     )
                // })}
            />
        </Stack.Navigator>
    )
}