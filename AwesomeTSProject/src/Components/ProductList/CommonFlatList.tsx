import { View, Text, FlatList, Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';

const width = Dimensions.get('window').width;

const productLists = [
    {pName: '오레오 초콜릿', price:'2,150원'},
    {pName: '건강음료', price:'1,150원'},
    {pName: '오징어땅콩', price:'2,300원'},
    {pName: '프리미엄스벅커피', price:'3,200원'},
    {pName: '에너지바', price:'1,300원'},
    {pName: '스크류바', price:'1,100원'},
    {pName: '풍선껌', price:'650원'},
    {pName: '에너지 드링크', price:'1,850원'},
]

const CommonFlatList = () => {
    const renderItems = ( data: any) => {
        return (
            <View key={ data.item.pName} style={{ borderColor:'#d8d8d8', borderRadius:10, borderWidth:1, width: (width - 60)/2, height:140, justifyContent:'center', marginHorizontal:5, marginBottom:5, alignItems:'center'}}>
                <Text style={{ width:70, height:70, marginBottom:5, borderWidth:1,}}>사진</Text>
                <View style={{ flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around'}}>
                    <View style={{ borderWidth:1, padding:5}}>
                        <Text>{ data.item.pName}</Text>
                        <Text>{ data.item.price}</Text>
                    </View>
                    <Avatar.Text size={ 30} label="+" />
                </View>
            </View>
        )
    };

    return (
        <View style={{ padding:20}}>
            <FlatList 
                key="_"
                keyExtractor={ item => "_" + item.pName}
                data={ productLists}
                renderItem={ renderItems} 
                numColumns={ 2}
            />
        </View>
    )
};

export default CommonFlatList;