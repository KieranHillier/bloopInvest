import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DiscoverPeopleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DiscoverPeopleScreen</Text>
            </View>
        );
    }
}
export default DiscoverPeopleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});