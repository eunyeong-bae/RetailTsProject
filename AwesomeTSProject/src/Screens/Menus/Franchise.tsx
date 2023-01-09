import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { IconButton, MD3Colors, Button, Divider,Avatar } from 'react-native-paper';
import CommonHeader from '../../Components/Header/CommonHeader';
import CommonFlatList from '../../Components/ProductList/CommonFlatList';
import CommonPopOver from '../../Components/CommonPopOver';

interface FranchiseProps {
    SelectedStore: any,
}

const sortMenu = {
    'currentStatus' : '정렬',
    'sortMenuList' : [
        {name : '신규 상품순', value: '1'},
        {name : '금액 높은순', value: '2'},
        {name : '금액 낮은순', value: '3'},
        {name : '할인율 순', value: '4'}
    ],
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Franchise = ( props: any) => { // props: FranchiseProps
    const { navigation} = props;

    const onClickCategory = ( category: any) => {
        navigation.navigate( category);
    };
    
    return (
        <SafeAreaView style={{ width:width, height:height}}>
            <View style={{ flex:1, backgroundColor:'#fff'}}>
                <CommonHeader MenuName="CU" navigation={ navigation} />
                <Divider/>

                <View style={ componentStyle.cvsInfoContainer}>
                    <View style={ componentStyle.cvsInfoContents}>
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
                    <Button mode="contained-tonal" onPress={ onClickCategory.bind( this, 'OnePlusMenu')}>1+1</Button>
                    <Button mode="contained-tonal" onPress={ onClickCategory.bind( this, 'TwoPlusMenu')}>2+1</Button>
                    <Button mode="contained-tonal" onPress={ onClickCategory.bind( this, 'NewMenu')}>신상</Button>
                    <Button mode="contained-tonal" onPress={ onClickCategory.bind( this, 'DiscountMenu')}>할인</Button>
                    {/* <Avatar.Text size={ 24} style={{ width:40, height:30}} label="1+1" /> */}
                </View>
                <Divider/>

                <View style={{ width:'100%', height:40}}>
                    <Text style={{ fontSize:20, fontWeight:'bold', paddingHorizontal:10, paddingVertical:10}}>인기상품</Text>
                </View>
                <Divider />
                {/* { props.SelectedStore && 
                    <View>
                        <Text>인기상품</Text>
                    </View>
                } */}

                <View style={{ flex:1}}>
                    <View style={ componentStyle.cvsProductInfoTop}>
                        <Text style={{fontSize:16, fontWeight:'600'}}>총 25개</Text>
                        <CommonPopOver sortMenu={ sortMenu} />
                    </View>
                    <Divider/>
                    <CommonFlatList />
                </View>

            </View>
        </SafeAreaView>
    )
};

export default Franchise;

const componentStyle = StyleSheet.create({
    cvsInfoContainer: {
        width:'80%',
        height:80, 
        justifyContent:'center', 
        alignItems:'center',
        margin:5, 
        marginHorizontal:40, 
        marginVertical:15,
        borderWidth:1, 
        borderRadius:50, 
        borderColor:'#d8d8d8', 
    },
    cvsInfoContents: {
        width:'100%', 
        flexDirection:'row', 
        justifyContent:'space-around', 
        marginBottom:10
    },
    cvsProductInfoTop: {
        width:'100%', 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center', 
        marginVertical:5, 
        paddingHorizontal:12
    }

});