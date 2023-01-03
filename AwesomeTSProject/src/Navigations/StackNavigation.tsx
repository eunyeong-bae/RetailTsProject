import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Screens/Home';

const Stack = createStackNavigator();
export function StackNavigation( props: any) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={ Home}
            />
        </Stack.Navigator>
    )
}