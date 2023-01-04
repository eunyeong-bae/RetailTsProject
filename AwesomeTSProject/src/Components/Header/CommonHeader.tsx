import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

interface CommonHeaderProps {
    MenuName: any,  
}

const CommonHeader = ( props: CommonHeaderProps) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title={ props.MenuName} />
            {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        </Appbar.Header>
    )
};

export default CommonHeader;