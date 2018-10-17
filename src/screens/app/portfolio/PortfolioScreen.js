import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import PortfolioStockCard from '../../../components/portfolioStockCard'

class PortfolioScreen extends Component {
    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        return (
            <View style={styles.container}>
                <View style={styles.userStatsBackground}>
                    <View style={styles.userStatsForeground}>
                        <View style={styles.userTop}></View>
                        <View style={styles.userBottom}></View>
                    </View>
                </View>
                <ScrollView style={{flex:1}}>
                    <Text>PortfolioScreen</Text>
                    <PortfolioStockCard data={data}/>
                    <PortfolioStockCard data={data}/>
                    <PortfolioStockCard data={data}/>
                    <PortfolioStockCard data={data}/>
                    <PortfolioStockCard data={data}/>
                    <PortfolioStockCard data={data}/>
                </ScrollView>
                
                
            </View>
        );
    }
}
export default PortfolioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
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
    },
    userTop: {
        height: '55%',
        width: '100%',
        backgroundColor: 'pink'
    },
    userBottom: {
        height: '45%',
        width: '100%',
        backgroundColor: 'grey'
    },
});