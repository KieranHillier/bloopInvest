import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DiscoverStockScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DiscoverStockScreen</Text>
            </View>
        );
    }
}
export default DiscoverStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});