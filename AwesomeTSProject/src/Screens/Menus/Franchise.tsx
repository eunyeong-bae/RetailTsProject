import { View, Text } from 'react-native';
import { IconButton, MD3Colors, Button, Divider,Avatar } from 'react-native-paper';
import CommonHeader from '../../Components/Header/CommonHeader';
import CommonFlatList from '../../Components/ProductList/CommonFlatList';

interface FranchiseProps {
    SelectedStore: any,
}

const Franchise = () => { // props: FranchiseProps
    return (
        <View style={{ flex:1, backgroundColor:'#fff'}}>
            <CommonHeader MenuName="CU" />
            <Divider/>

            <View style={{ borderWidth:1, borderColor:'#d8d8d8', height:80, margin:5, borderRadius:50, width:'80%',justifyContent:'center', alignItems:'center', marginHorizontal:40, marginVertical:15}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-around', marginBottom:10}}>
                    <Text>상봉타워팰리스점</Text>
                    <Text>위치버튼</Text>
                    {/* <IconButton
                        icon="camera"
                        iconColor={ MD3Colors.error50}
                        size={ 20}
                        onPress={() => console.log('Pressed')}
                    /> */}
                </View>
                <Text style={{ width:'100%', paddingLeft:40}}>운영시간: 09:00 ~ 24:00</Text>
            </View>
            <Divider/>

            <View style={{ flexDirection:'row', justifyContent:'space-around', marginVertical:10}}>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>1+1</Button>
                {/* <Avatar.Text size={ 24} style={{ width:40, height:30}} label="1+1" /> */}
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>2+1</Button>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>신상</Button>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>할인</Button>
            </View>
            <Divider/>
            {/* { props.SelectedStore && 
                <View>
                    <Text>인기상품</Text>
                </View>
            } */}
            <View style={{ width:'100%', height:40}}>
                <Text style={{ fontSize:20, fontWeight:'bold', paddingHorizontal:10, paddingVertical:10}}>인기상품</Text>
            </View>
            <Divider />

            <View>
                <View style={{ width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5, paddingHorizontal:12}}>
                    <Text style={{fontSize:16, fontWeight:'600'}}>총 25개</Text>
                    <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>정렬</Button>
                </View>
                <Divider/>
                <CommonFlatList />
            </View>

        </View>
    )
};

export default Franchise;