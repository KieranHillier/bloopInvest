import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DetailedStockScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topNumbers}></View>
                <View style=></View>
            </View>
        );
    }
}
export default DetailedStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});