import { useContext } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar, Provider, Button, Dialog, Portal, } from 'react-native-paper';
import { CommonContext } from '../../Context/CommonContext';
import CommonDialog from '../../Dialog/CommonDialog';

const width = Dimensions.get('window').width;

const productLists = [
    {pName: '오레오 초콜릿', price:'2,150원'},
    {pName: '건강음료', price:'1,150원'},
    {pName: '오징어땅콩', price:'2,300원'},
    {pName: '풍선껌', price:'650원'},
    {pName: '프리미엄스벅커피', price:'3,200원'},
    {pName: '에너지바', price:'1,300원'},
    {pName: '프리미엄스벅커피', price:'3,200원'},
    {pName: '스크류바', price:'1,100원'},
    {pName: '에너지 드링크', price:'1,850원'},
    {pName: '풍선껌', price:'650원'},
    {pName: '에너지 드링크', price:'1,850원'},
]

const CommonFlatList = () => {
    const { centerDialogState, setCenterDialog} = useContext(CommonContext)

    const renderItems = ( data: any) => {
        return (
            <TouchableOpacity onPress={ () => setCenterDialog( !centerDialogState.isAction)}>
                <View key={ data.item.pName} style={ CommonFlatListStyle.productContainer}>
                        <Text style={ CommonFlatListStyle.productTitleArea}>사진</Text>
                        <View style={ CommonFlatListStyle.productInfoArea}>
                            <View style={{ borderWidth:1, padding:5}}>
                                <Text>{ data.item.pName}</Text>
                                <Text>{ data.item.price}</Text>
                            </View>
                            <Avatar.Text size={ 30} label="+" />
                        </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (

    <Provider>
        <View style={{ padding:20, marginBottom:50}}>
            <FlatList 
                key="_"
                keyExtractor={ item => "_" + item.pName}
                data={ productLists}
                renderItem={ renderItems} 
                numColumns={ 2}
                showsVerticalScrollIndicator={false}
                //onEndReached
                //onEndReachedThreshold
            />
        </View>
    </Provider>
    )
};

export default CommonFlatList;

const CommonFlatListStyle = StyleSheet.create({
    productContainer: {
        width: (width - 60)/2, 
        height:140, 
        justifyContent:'center', 
        alignItems:'center',
        marginHorizontal:5, 
        marginBottom:5, 
        borderWidth:1,
        borderRadius:10, 
        borderColor:'#d8d8d8', 
    },
    productTitleArea: {
        width:70, 
        height:70, 
        marginBottom:5, 
        borderWidth:1,
    },
    productInfoArea: {
        width:'100%', 
        flexDirection:'row', 
        justifyContent:'space-around',
        alignItems:'center', 
    }
});