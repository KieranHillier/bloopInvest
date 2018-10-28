import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';
import DiscoverStockScreen from './headings/DiscoverStockScreen'
import DiscoverPeopleScreen from './headings/DiscoverPeopleScreen'
import DiscoverGroupsScreen from './headings/DiscoverGroupsScreen'

class DiscoverScreen extends Component {
    render() {
        return (
            <AppTopNavigator/>
        );
    }
}
export default DiscoverScreen;

const StockScreen = {
    screen: DiscoverStockScreen,
    navigationOptions: {}
  }
  
  const PeopleScreen = {
    screen: DiscoverPeopleScreen,
    navigationOptions: {}
  }
  
  const GroupsScreen = {
    screen: DiscoverGroupsScreen,
    navigationOptions: {}
  }
  
  const RouteConfig = {
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        color: 'black',
        fontSize: 20
        
      },
      indicatorStyle: {
          backgroundColor: 'orange'
      }
    }
  }
  
const AppTopNavigator = createMaterialTopTabNavigator({
    Stocks: StockScreen,
    People: PeopleScreen,
    Groups: GroupsScreen
}, RouteConfig)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});