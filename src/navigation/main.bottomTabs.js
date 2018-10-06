import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'

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

const config = {
    initialRoute: 'Home'
}

const BottomTabNavigator = createBottomTabNavigator({
    Home,
    Profile
})

export default BottomTabNavigator