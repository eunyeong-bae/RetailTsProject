import { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';

interface CommonDialogProps {
    isVisible: boolean,
}

const CommonDialog = ( props: CommonDialogProps) => {
    const [ isVisible, setIsVisible ] = useState( props.isVisible)

    const hideDialog = () => setIsVisible( !isVisible);

    return (
        // <Provider>
            <Portal>
                <Dialog visible={ isVisible} onDismiss={hideDialog} style={{ maxWidth: "80%", width: 600, alignSelf: "center", borderRadius: 8, backgroundColor:'#eee' }}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        // </Provider>
    );
};

export default CommonDialog;