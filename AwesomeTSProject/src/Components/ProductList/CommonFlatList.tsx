import { View, Text, FlatList } from 'react-native';

const productLists = [
    {pName: '오레오 초콜릿', price:'2,150원'},
    {pName: '건강음료', price:'1,150원'},
    {pName: '오징어땅콩', price:'2,300원'},
    {pName: '프리미엄스벅커피', price:'3,200원'},
    {pName: '에너지바', price:'1,050원'},
]

const CommonFlatList = () => {
    const renderItems = ( data: any) => {
        return (
            <View key={ data.item.pName} style={{ borderColor:'red', borderWidth:1, width:140, height:140, justifyContent:'center'}}>
                <Text style={{ width:70, height:70, borderWidth:1}}>사진</Text>
                <View style={{ borderWidth:1}}>
                    <Text>{ data.item.pName}</Text>
                    <Text>{ data.item.price}</Text>
                </View>
            </View>
        )
    };

    return (
        <View style={{ borderWidth:1, paddingVertical:20}}>
            <FlatList 
               data={ productLists}
               renderItem={ renderItems} 
            />
        </View>
    )
};

export default CommonFlatList;