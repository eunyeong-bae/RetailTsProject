import { View, Text } from 'react-native';
import { IconButton, MD3Colors, Button } from 'react-native-paper';
import CommonHeader from '../../Components/Header/CommonHeader';
import CommonFlatList from '../../Components/ProductList/CommonFlatList';

interface FranchiseProps {
    SelectedStore: any,
}

const Franchise = () => { // props: FranchiseProps
    return (
        <View style={{ flex:1}}>
            <CommonHeader MenuName="CU" />

            <View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text>상봉타워팰리스점</Text>
                    {/* <IconButton
                        icon="camera"
                        iconColor={ MD3Colors.error50}
                        size={ 20}
                        onPress={() => console.log('Pressed')}
                    /> */}
                </View>
                <Text>운영시간: 09:00 ~ 24:00</Text>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>1+1</Button>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>2+1</Button>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>신상</Button>
                <Button mode="contained-tonal" onPress={() => console.log('Pressed!')}>할인</Button>
            </View>
            
            {/* { props.SelectedStore && 
                <View>
                    <Text>인기상품</Text>
                </View>
            } */}
            <View><Text>인기상품</Text></View>

            <View>
                <View>
                    <Text>총 25개</Text>
                    <Text>정렬버튼</Text>
                </View>
                <CommonFlatList />
            </View>

        </View>
    )
};

export default Franchise;