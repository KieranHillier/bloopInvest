import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DiscoverScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DiscoverScreen</Text>
            </View>
        );
    }
}
export default DiscoverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});