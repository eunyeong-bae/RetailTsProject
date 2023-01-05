import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

interface CommonHeaderProps {
    MenuName: any,  
}

const CommonHeader = ( props: CommonHeaderProps) => {
    return (
        <View style={{ flexDirection:'row', alignItems:'center', }}>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title={ props.MenuName} />
            {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        </View>
    )
};

export default CommonHeader;