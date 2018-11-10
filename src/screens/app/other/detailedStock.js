import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import colors from "../../../assets/colors/theme";
import { withNavigation } from 'react-navigation'

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class DetailedStockScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topNumbers}>
                    <Text style={{fontSize:16}}>NASDAQ: <Text style={{fontSize: 21, fontWeight: 'bold'}}>Alphabet Inc.</Text></Text>
                    <Text style={{fontSize: 55, lineHeight: 70}}>$1,042.43</Text>
                    <View style={{flexDirection: 'row', alignItems:'space-between'}}>
                        <Text>As of: <Text>3:43pm</Text></Text>
                        <Text>+15.6 (2.1%)</Text>
                    </View>
                </View>
                <View style={styles.middleGraph}></View>
                <View style={styles.bottomNumbers}></View>
            </View>
        );
    }
}
export default DetailedStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topNumbers: {
        height: height * 0.25,
        width: width,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleGraph: {
        flex: 1,
        width: width,
        backgroundColor: 'green'
    },
    bottomNumbers: {
        height: height * 0.20,
        width: width,
        backgroundColor: 'blue'
    }
});