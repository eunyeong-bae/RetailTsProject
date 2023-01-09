import React from 'react';
import { Text, View, SafeAreaView, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Home = (props: any) => {
    return (
        <SafeAreaView style={{ width: width, height: height}}>
            <View style={{flex: 1, backgroundColor:'pink'}}>
                <Text>ddd</Text>
            </View>
        </SafeAreaView>
    )
}