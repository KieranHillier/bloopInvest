import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Animated, 
    PanResponder, 
    Button, 
    TouchableOpacity
} from "react-native";
import { Row } from "native-base";
import colors from "../../../../assets/colors/theme";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const stockCards = [
    {id:0, stockName: "goog"},
    {id:1, stockName: "twtr"},
    {id:2, stockName: "meme"},
    {id:3, stockName: "XD"},
    {id:4, stockName: "6969"},
]

class DiscoverStockScreen extends Component {

    constructor(){
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIdex: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform:[{
                rotate: this.rotate
            }, ...this.position.getTranslateTransform() ]
        }

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })

        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })
    }

    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,
            onPanResponderMove:(evt, gestureState) => {
                this.position.setValue({x: gestureState.dx, y: gestureState.dy})
            },
            onPanResponderRelease:(evt, gestureState) => {
                if (this.state.currentIdex < 4) {
                    if (gestureState.dx > 180) {
                        Animated.spring(this.position, {
                            toValue: {x: width + 100, y: gestureState.dy}
                        }).start(() => {
                            this.setState({ currentIdex: this.state.currentIdex + 1}, () => {
                                this.position.setValue({x:0, y:0})
                            })
                        })
                    } else if (gestureState.dx < -180) {
                        Animated.spring(this.position, {
                            toValue: {x: -width - 100, y: gestureState.dy}
                        }).start(() => {
                            this.setState({ currentIdex: this.state.currentIdex + 1}, () => {
                                this.position.setValue({x:0, y:0})
                            })
                        })
                    } else {
                        Animated.spring(this.position, {
                            toValue: {x: 0, y: 0},
                            friction: 4
                        }).start()
                    }
                } else {
                    Animated.spring(this.position, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }
               
            }
        })
    }

    renderStocks = () => {
        return stockCards.map((item, i) => {

            if (i < this.state.currentIdex) {
                return null
            } else if (i == this.state.currentIdex) {
                
                return(
                    <Animated.View {...this.PanResponder.panHandlers} key={item.id} style={[this.rotateAndTranslate, styles.stockCard]}>
                        <Text>{item.stockName}</Text>
                    </Animated.View>
                )
                
                
            } else {
                return(
                    <Animated.View key={item.id} style={[{opacity: this.nextCardOpacity, transform: [{scale: this.nextCardScale}]}, styles.stockCard]}>
                        <Text>{item.stockName}</Text>
                    </Animated.View>
                )
            }


            // return(
            //     <Animated.View {...this.PanResponder.panHandlers} key={item.id} style={[{transform:this.position.getTranslateTransform()}, styles.stockCard]}>
            //         <Text>{item.stockName}</Text>
            //     </Animated.View>
            // )

            
        }).reverse()
    }

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        return (
            <View style={styles.container}>
                <ScrollView style={styles.foreground}>
                    <Text style={styles.subheading}>Trending</Text>
                    <View style={styles.stockCardContainer}>
                        <Animated.View style={[styles.stockCard]}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 10}}>
                                <Text style={{fontSize: 39, color: colors.text}}>GOOGL</Text>
                                <Text style={{fontSize: 39, color: colors.text}}>$1042</Text>

                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 11}}>
                                <Text style={{fontSize: 12, fontWeight: '500', color: colors.text}}>NASDAQ: <Text style={{fontSize: 12, fontWeight: '200'}}>Alphabet Inc.</Text></Text>
                                <Text style={{fontSize: 17, fontWeight: '500', color: '#61D943'}}>15.6 (2.1%)</Text>
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
                                    <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 12,}}>
                                        <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>PH</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 12, marginLeft: 8}}>
                                        <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>Watchlist</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </Animated.View>
                    </View>
                    <Text style={styles.subheading}>Industries</Text>
                    <View style={styles.industryContainer}>
                        <View style={[styles.industryCard, styles.industryCardLeft]}>
                            <Text style={styles.industryText}>TECHNOLOGY</Text>
                        </View>
                        <View style={[styles.industryCard, styles.industryCardRight]}>
                            <Text style={styles.industryText}>ENVIRONMENT</Text>
                        </View>
                    </View>
                    <View style={styles.industryContainer}>
                        <View style={[styles.industryCard, styles.industryCardLeft]}>
                            <Text style={styles.industryText}>HEALTHCARE</Text>
                        </View>
                        <View style={[styles.industryCard, styles.industryCardRight]}>
                            <Text style={styles.industryText}>FINANCE</Text>
                        </View>
                    </View>
                    <View style={styles.industryContainer}>
                        <View style={[styles.industryCard, styles.industryCardLeft]}>
                            <Text style={styles.industryText}>DAVID</Text>
                        </View>
                        <View style={[styles.industryCard, styles.industryCardRight]}>
                            <Text style={styles.industryText}>SUX</Text>
                        </View>
                    </View>
                    <View style={styles.industryContainer}>
                        <View style={[styles.industryCard, styles.industryCardLeft]}>
                            <Text style={styles.industryText}>DIX</Text>
                        </View>
                        <View style={[styles.industryCard, styles.industryCardRight]}>
                            <Text style={styles.industryText}>HEHE</Text>
                        </View>
                    </View>
                    <View style={styles.footer}></View>
                    
                </ScrollView>
            </View>
        );
    }
}
export default DiscoverStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    foreground: {
        flex: 1,
        opacity: 1,
      
        
    },
    subheading: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: '3%',
        color: '#545454',
        marginLeft: '5%',
    },
    stockCardContainer: {
        height: height * 0.325,
        marginLeft: '5%',
        marginRight: '5%',
    },
    stockCard: {
        position: 'absolute',
        height: height * 0.325,
        width: width * 0.9,
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
    industryContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginLeft: '5%',
        marginRight: '5%',
    },
    industryCard: {
        flex: 1,
        height: height * 0.15,
        width: null,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 4,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    industryCardLeft: {
        marginRight: 5
    },
    industryCardRight: {
        marginLeft: 5
    },
    industryText: {
        fontSize: 19,
    },
    footer: {
        height: 20
    },
});