import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import DashBoardScreen from '../screens/app/dashboard/DashBoardScrenn'
import PortfolioScreen from '../screens/app/portfolio/PortfolioScreen'
import DiscoverScreen from '../screens/app/discover/DiscoverScreen'

const Dashboard = {
    screen: DashBoardScreen,
    navigationOptions: {
        title: 'Dashboard'
    }
}

const Portfolio = {
    screen: PortfolioScreen,
    navigationOptions: {
        title: 'Portfolio'
    }
}

const Discover = {
    screen: DiscoverScreen,
    navigationOptions: {
        title: 'Discover'
    }
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
})

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