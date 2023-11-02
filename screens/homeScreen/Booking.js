import React from "react";
import { View,Text, Dimensions } from "react-native";


const Booking = () =>{
    const devicesWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
     return(

        <View style={{backgroundColor:'#ffc2cd',height:deviceHeight,width:devicesWidth}}>
            <Text style={{color:'red'}}>
                Booking
            </Text>
        </View>
     )
}


export default Booking;