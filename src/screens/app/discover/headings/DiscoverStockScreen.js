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
    TouchableOpacity,
    ViewPagerAndroid,
    StatusBar,
    RefreshControl
} from "react-native";
import { Row } from "native-base";
import colors from "../../../../assets/colors/theme";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import FeaturedStockCard from '../../../../components/featuredStockCard'
import IndustryContainer from '../../../../components/industryContainer'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const stockCards = [{
        id:0, 
        stockName: "GOOGL", 
        price: 1042.42,
        difference: 15.6,
        differencePercentage: 2.1,
        market: "NASDAQ",
        companyName: "Alphabet Inc",
        data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ],
        time: "3:43pm"
    },{
        id:1, 
        stockName: "TWTR", 
        price: 73,
        difference: -15.6,
        differencePercentage: -2.1,
        market: "NASDAQ",
        companyName: "TWITTER",
        data: [  95, -4, -24, 85, 91, 35, 53, 91, 35, 53, -53, 24, 50, 50, 10, 40, 95, -4, -24, 85, -20, -80, 50, 10, 40, -53, 24, 50, -20, -80 ],
        time: "3:43pm"
    },{
        id:2, 
        stockName: "AMAZN", 
        price: 1742.42,
        difference: 1.6,
        differencePercentage: 0.1,
        market: "IDK",
        companyName: "Amazon",
        data: [  -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95],
        time: "3:43pm"
    },{
        id:3, 
        stockName: "FB", 
        price: 92.42,
        difference: -23.6,
        differencePercentage: -4.1,
        market: "NASDAQ",
        companyName: "Facebook Inc",
        data: [  50, 50, 50 ],
        time: "3:43pm"
    },{
        id:4, 
        stockName: "AQR", 
        price: 2042.69,
        difference: 420.6,
        differencePercentage: 4.2,
        market: "NASDAQ",
        companyName: "Aquire",
        data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ],
        time: "3:43pm"
    },
]

let active = '#000000'

class DiscoverStockScreen extends Component {

    constructor(){
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            refreshing: false,
            active: '#000000',
        }
    }

    componentWillMount() {

    }

    detailsPage = () => {
        this.props.navigation.navigate('People')
    }

    // onRefresh = () => {
    //     this.setState({refreshing: true})
    //     fetchData().then(() => {
    //         this.setState({refreshing: false})
    //     })
    // }

    switchFeatured = (e) => {
        // alert(e.nativeEvent.position)
        // active = 'pink'
        let newPosition = e.nativeEvent.position
        let previousPosition = this.state.currentIndex

        if (newPosition > previousPosition) {
            this.setState({
                currentIndex: previousPosition += 1
            })
        } else {
            this.setState({
                currentIndex: previousPosition -= 1
            }) 
        }
        
    }

    renderCards = () => {
        return stockCards.map((item, i) => {
            
                return(
                    <Animated.View key={item.id} navigation={this.props.navigation} style={styles.stockCard}>
                        <FeaturedStockCard 
                            name={item.stockName}
                            price={item.price}
                            difference={item.difference}
                            differencePercentage={item.differencePercentage}
                            market={item.market}
                            companyName={item.companyName}
                            data={item.data}
                            time={item.time}
                             />
                    </Animated.View>
                )
            
        })
    }

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const { currentIndex }  = this.state

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#ECEAEA' barStyle='dark-content'/>
                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}/>} style={styles.foreground} showsVerticalScrollIndicator={false}>
                   
                    <ViewPagerAndroid style={styles.stockCardContainer} initialPage={0} pageMargin={15} onPageSelected={this.switchFeatured}>
                        {this.renderCards()}
    
                    </ViewPagerAndroid>
                    <View style={{alignSelf: 'flex-end', flexDirection: 'row', marginRight: '3%', marginTop: 10}}>
                        <View style={[styles.featuredDot, currentIndex == 0 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
                        <View style={[styles.featuredDot, currentIndex == 1 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
                        <View style={[styles.featuredDot, currentIndex == 2 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
                        <View style={[styles.featuredDot, currentIndex == 3 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
                        <View style={[styles.featuredDot, currentIndex == 4 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>    
                    </View>
                    <View style={{flex: 1, backgroundColor: colors.secondary, marginTop: 15}}>
                        <Text style={styles.subheading}>Industries</Text>
                        <View style={styles.industryContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={[styles.industryCard, styles.industryCardLeft]}>
                                <Text style={styles.industryText}>TING</Text>
                            </TouchableOpacity>
                            <View style={[styles.industryCard, styles.industryCardRight]}>
                                <Text style={styles.industryText}>TECH</Text>
                            </View>
                        </View>
                        <IndustryContainer industryOne={'TECHNOLOGY'} industryTwo={'ENVIRONMENT'} />
                        <IndustryContainer industryOne={'HEALTHCARE'} industryTwo={'FINANCE'} />
                        <IndustryContainer industryOne={'DAVID'} industryTwo={'SUX'} />
                        <IndustryContainer industryOne={'DIX'} industryTwo={'HEHE'} />
                        <View style={styles.footer}></View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default DiscoverStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        
    },
    foreground: {
        flex: 1,
        opacity: 1,
      
        
    },
    subheading: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'normal',
        marginTop: '3%',
        color: colors.main,
        marginLeft: '3%',
        marginBottom: '1.5%',
    },
    stockCardContainer: {
        height: height * 0.325,
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
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
    industryContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginLeft: '3%',
        marginRight: '3%',
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
    featuredDot: {
        width: 8, 
        height: 8,
        marginRight: 5,
        borderRadius: 20
    },
    featuredDotActive: {
        backgroundColor: colors.text
    },
    featuredDotInactive: {
        backgroundColor: '#C4C4C4'
    }
});