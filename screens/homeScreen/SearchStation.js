import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";


const SearchStation = () => {
    const devicesWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    return (
        <ScrollView style={{
            height:deviceHeight,
            width:devicesWidth,
            backgroundColor:'#ffc2cd',
        }}>
            <View 
            
            style={{
                marginHorizontal: 15,
                backgroundColor: "#fff",
                height: deviceHeight / 2,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,

            }}>
                <Text style={{ color: 'red' }}>
                    SearchStation
                </Text>
            </View>
        </ScrollView>


    )
}


export default SearchStation;