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

const franchiseMenu = ['1+1','2+1','신상','할인'];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Franchise = ( props: any) => { // props: FranchiseProps
    const { navigation} = props;

    const onClickCategory = ( category: any) => {
        //무조건 SubMenu.tsx 로 화면이동되도록 
        navigation.navigate( category);
    };
    
    return (
        <SafeAreaView style={{ width:width, height:height}}>
            <View style={{ flex:1, backgroundColor:'#fff'}}>
                {/* <CommonHeader MenuName="CU" navigation={ navigation} />
                <Divider/> */}

                <View style={ componentStyle.cvsInfoContainer}>
                    <View style={ componentStyle.cvsInfoContents}>
                        <Text style={{ fontWeight:'600', fontSize:16, marginRight:5}}>상봉타워팰리스점</Text>
                        <IconButton
                            icon="crosshairs-gps"
                            iconColor={ MD3Colors.error50}
                            size={ 15}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <Text style={{ width:'100%', paddingLeft:35, paddingBottom:10, fontSize:15,fontWeight:'500'}}>운영시간: 09:00 ~ 24:00</Text>
                </View>
                <Divider/>

                <View style={{ flexDirection:'row', justifyContent:'space-around', marginVertical:10}}>
                    {/** 각 메뉴가 어떤 값인지, context api 변수에 업뎃시켜야할 듯
                     * 지금 선택된 메뉴가 어떤건지
                     * EX) 1+1 -> oneplusmenu 
                     */}
                    { franchiseMenu.map(( menu: any) => {
                        return (
                            <Button mode="contained-tonal" onPress={ onClickCategory.bind( this, 'SubMenu')}>{ menu}</Button>
                        )
                    })}
                    {/* <Avatar.Text size={ 24} style={{ width:40, height:30}} label="1+1" /> */}
                </View>
                <Divider/>

                <View style={{ flex:1}}>
                    <Text style={{ fontSize:20, fontWeight:'bold', paddingHorizontal:10, paddingTop:10}}>인기상품</Text>
                    <View style={ componentStyle.cvsProductInfoTop}>
                        <Text style={{fontSize:15, fontWeight:'600'}}>총 25개</Text>
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
        justifyContent:'center', 
        alignItems:'center',
        marginHorizontal:40, 
        marginVertical:15,
        borderWidth:1, 
        borderRadius:50, 
        borderColor:'#d8d8d8', 
    },
    cvsInfoContents: {
        width:'100%', 
        flexDirection:'row',
        paddingHorizontal:35,
        alignItems:'center',
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