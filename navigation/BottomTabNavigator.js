import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen/Home';
import Booking from '../screens/homeScreen/Booking';
import Support from '../screens/homeScreen/Support';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image } from 'react-native';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                tabBarActiveTintColor: '#E55402',
               
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 0,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    paddingTop: 0,
                    position: 'absolute',

                }

            }}
        >
            <Tab.Screen name="Home" component={TopTabNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../assets/home.png')}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#E55402' : '#777777'
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="Booking" component={Booking}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../assets/bag.png')}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#E55402' : '#777777'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Support" component={Support}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../assets/head.webp')}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#E55402' : '#777777'
                                }}
                            />
                        </View>
                    )
                }} />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;