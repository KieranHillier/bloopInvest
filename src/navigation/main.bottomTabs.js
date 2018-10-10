import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import DiscoverScreen from '../screens/discover/DiscoverScreen'

const Home = {
    screen: HomeScreen,
    navgiationOptions: {
        header:null
    }
}

const Profile = {
    screen: ProfileScreen,
    navgiationOptions: {
        header:null
    }
}

const Discover = {
    screen: DiscoverScreen,
}

const config = {
    initialRoute: 'Home'
}

const BottomTabNavigator = createBottomTabNavigator({
    Home,
    Profile,
    Discover
})

export default BottomTabNavigator