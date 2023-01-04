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
            <View key={ data.item.pName}>
                <Text>{ data.item.pName}</Text>
                <Text>{ data.item.price}</Text>
            </View>
        )
    };

    return (
        <View>
            <FlatList 
               data={ productLists}
               renderItem={ renderItems} 
            />
        </View>
    )
};

export default CommonFlatList;