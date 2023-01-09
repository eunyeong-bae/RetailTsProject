import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

interface CommonHeaderProps {
    MenuName: any,  
    navigation: any,
}

const CommonHeader = ( props: CommonHeaderProps) => {
    return (
        <View style={{ flexDirection:'row', alignItems:'center', }}>
            <Appbar.BackAction onPress={() => props.navigation.goBack()} />
            <Appbar.Content title={ props.MenuName} />
            { props.MenuName !== 'CU' &&
                <Appbar.Action icon="home-outline" onPress={() => props.navigation.navigate ("Home", {})} />
            }
        </View>
    )
};

export default CommonHeader;