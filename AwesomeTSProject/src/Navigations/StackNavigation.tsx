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
            />
            <Stack.Screen
                name="Franchise"
                component={ Franchise}
            />
            <Stack.Screen
                name="OnePlusMenu"
                component={ OneFlusMenu}
            />
        </Stack.Navigator>
    )
}