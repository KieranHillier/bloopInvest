import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import DashBoardScreen from '../screens/app/dashboard/DashBoardScreen'
import PortfolioScreen from '../screens/app/portfolio/PortfolioScreen'
import DiscoverScreen from '../screens/app/discover/DiscoverScreen'
import colors from '../assets/colors/theme'

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

const Discover = {
    screen: DiscoverScreen,
    navigationOptions: {
        title: 'Discover',
        headerTintColor: colors.text,
        headerStyle: {
            backgroundColor: colors.main,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
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