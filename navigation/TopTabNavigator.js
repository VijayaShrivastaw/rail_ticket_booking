import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchStation from '../screens/homeScreen/SearchStation';
import SearchTrain from '../screens/homeScreen/SearchTrain';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E55402',
        tabBarInactiveTintColor: "#777777",
        tabBarItemStyle: {
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderRightColor: '#777777',
          borderBottomColor: '#777777',
        },
        tabBarStyle: {
          marginTop: 15,
          marginHorizontal: 15,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          borderWidth: 1,
          borderColor: '#fff',

        }
      }}
      style={{
        backgroundColor: '#ffc2cd',
        paddingBottom: 0,


      }}
    >
      <Tab.Screen name="Search By Station" component={SearchStation}
      />
      <Tab.Screen name="Search By Train" component={SearchTrain} />
    </Tab.Navigator>

  );
}

export default TopTabNavigator;