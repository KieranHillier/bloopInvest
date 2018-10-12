import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class PortfolioScreen extends Component {
    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        return (
            <View style={styles.container}>
                <View style={styles.userStatsBackground}>
                    <View style={styles.userStatsForeground}>
                        <LineChart
                            style={{ height: '100%' }}
                            data={ data }
                            svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 3 }}
                            contentInset={{ top: 20, bottom: 20 }}
                            >
                        </LineChart>
                    </View>
                </View>
                <Text>PortfolioScreen</Text>
                
            </View>
        );
    }
}
export default PortfolioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    userStatsBackground: {
        height: '30%',
        width: '100%',
        backgroundColor: 'blue'
    },
    userStatsForeground: {
        flex: 1,
        backgroundColor: 'lightblue',
        marginHorizontal: 20
    }
});