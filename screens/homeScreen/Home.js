import React from "react";
import { View, Text, Dimensions } from "react-native";
import TopTabNavigator from "../../navigation/TopTabNavigator";


const Home = () => {
    const devicesWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    return (
        <View style={{backgroundColor:'#ffc2cd',height:deviceHeight,width:devicesWidth}}>

            <Text style={{color:'red'}}>
                Home
            </Text>
           
        </View>



    )
}


export default Home;