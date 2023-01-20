import { useContext, useState } from 'react';
import { View, Modal, SafeAreaView, Text } from 'react-native';
import { CommonContext } from '../Context/CommonContext';

// interface CommonDialogProps {
//     isVisible: boolean,
// }

const CommonDialog = () => {//props: CommonDialogProps
    // const [ isVisible, setIsVisible ] = useState( props.isVisible)
    const { centerDialogState, setCenterDialog} = useContext( CommonContext);

    // const hideDialog = () => setIsVisible( !isVisible);

    return (
        <Modal
            visible={ centerDialogState.isAction}
            animationType={"fade"}
            transparent={ false}
            presentationStyle={ "formSheet"}
            style={{ flex:1, justifyContent:'center', alignItems:'center', height: 400, width: 400, margin:0, zIndex: 9999}}
        >
            <SafeAreaView>
                <View  style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
                    <Text>다이얼로그 헤더</Text>

                    <View>
                        <Text>다이얼로그 컨텐츠</Text>
                    </View>

                    <Text>다이얼로그 풋터</Text>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

{/* <View style={{ width:'80%', height:'50%', borderWidth:1, backgroundColor:'red',}}>
    <Dialog visible={ centerDialogState.isAction} onDismiss={ () => setCenterDialog( !centerDialogState.isAction)} style={{ maxWidth: "80%", width: 600, alignSelf: "center", borderRadius: 8, backgroundColor:'#eee' }}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={ () => setCenterDialog( !centerDialogState.isAction)}>Done</Button>
        </Dialog.Actions>
    </Dialog>
</View> */}
export default CommonDialog;