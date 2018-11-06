import React from "react";
import { 
    View,
    Text,
    StyleSheet, 
    Animated, 
    TouchableOpacity,
    Dimensions
} from "react-native";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import colors from "../assets/colors/theme";

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const FeaturedStockCard = (props) => (
    
    <View style={{flex:1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 10}}>
            <Text style={{fontSize: 39, color: colors.text, fontFamily: 'Roboto'}}>{props.name}</Text>
            <Text style={{fontSize: 39, color: colors.text, }}>$1042</Text>

        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14}}>
            <Text style={{fontSize: 12, fontWeight: '500', color: colors.text, lineHeight: 12, fontFamily: 'Roboto'}}>NASDAQ: <Text style={{fontSize: 12, fontWeight: '200'}}>Alphabet Inc.</Text></Text>
            <Text style={{fontSize: 17, fontWeight: '500', color: '#61D943', lineHeight: 18}}>15.6 (2.1%)</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 11}}>
            <LineChart
                style={{ height: '100%' }}
                data={ data }
                svg={{ stroke: '#61D943', strokeWidth: 3 }}
                contentInset={{ top: 20, bottom: 20 }}
                >
            </LineChart>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 11, paddingBottom: 5}}> 
            <Text style={{fontSize: 28, fontWeight: '500', color: colors.text}}>126 <Text style={{fontSize: 12, fontWeight: '200'}}>last week</Text></Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, height: 30}}>
                    <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>PH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, marginLeft: 8, height: 30}}>
                    <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>Watchlist</Text>
                </TouchableOpacity>
            </View>
        </View>     
    </View>
    )
export default FeaturedStockCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stockCard: {
        position: 'absolute',
        height: height * 0.325,
        width: '100%',
        backgroundColor: 'white',
        // borderWidth: 1,
        borderRadius: 12,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 4,
        marginTop: 5,
       
    },
});