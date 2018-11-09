import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import DashBoardScreen from '../screens/app/dashboard/DashBoardScreen'
import PortfolioScreen from '../screens/app/portfolio/PortfolioScreen'
import DiscoverScreen from '../screens/app/discover/DiscoverScreen'
import colors from '../assets/colors/theme'
import React from "react";
import { View, Text, TextInput } from 'react-native'

const Dashboard = {
    screen: DashBoardScreen,
    navigationOptions: {
        title: 'Dashboard',
        headerTintColor: colors.text,
        headerStyle: {
            backgroundColor: colors.main
        }
    }
}

const Portfolio = {
    screen: PortfolioScreen,
    navigationOptions: {
        title: 'Portfolio',
        headerTintColor: colors.text,
        headerStyle: {
            backgroundColor: colors.main
        }
    }
}

createHeader = () => {
    return (
        <View style={{height: 50, backgroundColor: colors.main, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end'}}>
            <View style={{width: 30, height: 30, borderRadius: 20, backgroundColor: colors.text, marginLeft: '5%', alignSelf: 'center', marginTop: 10}}></View>
            <TextInput style={{flex: 1, height: 31, backgroundColor: '#E3E3E3', borderRadius: 12, marginHorizontal: 30, marginBottom: 5}}></TextInput>
            <View style={{width: 30, height: 30, borderRadius: 20, backgroundColor: colors.text, marginRight: '5%', alignSelf: 'center', marginTop: 10}}></View>
        </View>
    )
}

const Discover = {
    screen: DiscoverScreen,
    navigationOptions: {
        header: createHeader(),
        title: 'Discover',
        headerTintColor: colors.text,
        headerStyle: {
            backgroundColor: colors.main,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS,
            height: 50,
        },
    },

}


const DashboardStackNavigator = createStackNavigator({
    Dashboard
})

const PortfolioStackNavigator = createStackNavigator({
    Portfolio
})

const DiscoverStackNavigator = createStackNavigator({
    Discover
})

const BottomTabStyles = {
    tabBarOptions: {
        style: {
            backgroundColor: colors.main
        }
    }
}

const AppTabNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: DashboardStackNavigator,  
    },
    Portfolio: {
        screen: PortfolioStackNavigator,
    },
    Discover: {
        screen: DiscoverStackNavigator,
    },
}, BottomTabStyles)

// const OverallStackNavigator = {
//     screen: AppTabNavigator,
//     navigationOptions: {
//         title: 'App'
//     }
// }

// const AppStackNavigator = createStackNavigator({
//     AppTabNavigator: OverallStackNavigator
// })

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppTabNavigator
})

export default AppDrawerNavigator