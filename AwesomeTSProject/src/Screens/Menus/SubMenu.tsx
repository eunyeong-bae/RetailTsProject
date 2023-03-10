import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { IconButton, MD3Colors, Button, Divider,Avatar } from 'react-native-paper';
import CommonHeader from '../../Components/Header/CommonHeader';
import CommonFlatList from '../../Components/ProductList/CommonFlatList';
import CommonPopOver from '../../Components/CommonPopOver';
import { useContext } from 'react';
import { CommonContext } from '../../Context/CommonContext';

// const selectedMenuNM = 'OnePlusMenu';
const menuList = [
    { name: '음료', value: 'drink'},
    { name: '과자', value: 'snack'},
    { name: '도시락', value: 'bento'},
    { name: '담배', value: 'cigarret'},
    { name: '과일', value: 'fruit'},
    { name: '아이스크림', value: 'iceCream'},
];
const sortMenu = {
    'currentStatus' : '정렬',
    'sortMenuList' : [
        {name : '신규 상품순', value: '1'},
        {name : '금액 높은순', value: '2'},
        {name : '금액 낮은순', value: '3'},
        {name : '할인율 순', value: '4'}
    ],
};

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

const SubMenu = ( props: any) => {
    const { navigation} = props;
    const { selectedTargetState} = useContext( CommonContext);

    const onClickCategory = ( category: any) => {
        return (
            <View></View>
        )
    };

    return (
        // <SafeAreaView style={{ width:width, height:height}}>
            <View style={{ flex:1, backgroundColor:'#fff'}}>
                {/* <CommonHeader MenuName={ selectedMenuNM} navigation={ navigation} /> */}
                {/* <Divider/> */}

                <View style={{ marginVertical:10, width:'100%', }}>
                    <FlatList 
                        columnWrapperStyle={{justifyContent: 'space-around'}}
                        key="_"
                        keyExtractor={ item => "_" + item.value}
                        data={ menuList}
                        renderItem={ ( menu: any) => {
                            return (
                                <View style={{width:'50%'}}>
                                    <Button 
                                        key={ menu.item.name + menu.item.value} 
                                        mode='contained-tonal'
                                        onPress={ onClickCategory.bind( this, menu.item.value)}
                                        style={{ borderWidth:1, margin:10}}
                                    >
                                        { selectedTargetState.selectedTarget + ' ' + menu.item.name}
                                    </Button>
                                </View>                            
                            )
                        }}
                        numColumns={ 2}
                        showsVerticalScrollIndicator={ false}
                    />
                    {/* { menuList.length > 0 &&
                        menuList.map(( menu: any) => {
                            return (
                                <Button key={ menu.name + menu.value} mode="Elevated button" onPress={ onClickCategory.bind( this, menu.value)}>{ menu.name}</Button>                            
                            )
                        })
                    } */}
                </View>
                <Divider/>

                <View style={{ flex:1}}>
                    <View style={ componentStyle.cvsProductInfoTop}>
                        <Text style={{fontSize:16, fontWeight:'600'}}>총 25개</Text>
                        <CommonPopOver sortMenu={ sortMenu} />
                    </View>
                    <Divider/>
                    <CommonFlatList />
                </View>

            </View>
        // </SafeAreaView>
    )
};

export default SubMenu;

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