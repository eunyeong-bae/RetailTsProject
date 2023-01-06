import { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'; 
import { Button} from 'react-native-paper';
import Popover, { PopoverMode } from 'react-native-popover-view'; 
import CommonUtil from '../Utils/CommonUtil';

interface CommonPopOverProps {
    sortMenu: any
}

const CommonPopOver = ( props: CommonPopOverProps) => {
    const [ showPopover, setShowPopover] = useState( false);
    const [ currentMenu, setCurrentMenu] = useState( props.sortMenu['currentStatus']);
    
    const onClickSortMenu = () => {

    }

    const renderPopOverTitle = () => {
        return (
            <View>
                <Button mode="contained-tonal" onPress={ onClickSortMenu}>{ currentMenu}</Button>
            </View>
        )
    };

    const renderPopoverItem = () => {
        return(
            <View></View>
        )
    };

    return (
        <>
            <Popover
                mode={ PopoverMode.RN_MODAL}
                isVisible={ showPopover}
                onRequestClose={() => setShowPopover( false)} 
                from={ renderPopOverTitle}
                popoverStyle={{ maxHeight: 264, width: 150, borderRadius: 10, paddingTop:10, paddingBottom:10}}       
            >
                {( !CommonUtil.objectIsNull( props.sortMenu['sortMenuList']) && showPopover) &&
                    <ScrollView style={{ maxHeight: 244}}>
                        <View style={[ sortMenuStyleSheet.sortItemContainer]}>
                            { props.sortMenu['sortMenuList'].length > 0 &&
                                <>
                                    { props.sortMenu['sortMenuList'].map(( menu : any) => {
                                        // return( renderPopoverItem( menu))
                                        }) 
                                    }
                                </>
                            }
                        </View>
                    </ScrollView>
                }
            </Popover>  
        </>
    )
};

export default CommonPopOver;

export const sortMenuStyleSheet = StyleSheet.create({
    sortItemContainer : {
        width: '100%',
        maxHeight: 244,
    },
    sortMainItem : {
        paddingLeft: 10,
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f5f8',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'

    },
    sortItemText : {
        color: '#000', 
    },
    disableText: {
        color: '#999'
    }
});