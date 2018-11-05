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
import colors from '../../../assets/colors/theme'

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
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: colors.main,
      },
      labelStyle: {
        color: colors.text,
        fontSize: 20
        
      },
      indicatorStyle: {
          backgroundColor: colors.text
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