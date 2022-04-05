import React, {Component} from "react";
import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import {monthYearControlStyles} from "../../styles/styles";
import Carousel from "react-native-snap-carousel";
import Color from "../../constants/colors";



export default class MonthYearControlElement extends Component{
    years = [
        '2019',
        '2020',
        '2021',
        '2022'
    ]
    months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        "Jun",
    ]
    render() {
        return (
            <View
                style={monthYearControlStyles.container}
            >
                <View
                    style={monthYearControlStyles.totalContainerStyle}
                >
                    <Text
                        style={monthYearControlStyles.totalTitleTextStyle}
                    >Total</Text>
                    <Text
                        style={monthYearControlStyles.totalTextStyle}
                    >$ 650</Text>
                </View>
                <View
                    style={monthYearControlStyles.carouselContainer}
                >
                    <Carousel
                        ref={(c)=>{this.yearCarousel = c;}}
                        data={this.years}
                        renderItem={({item, index})=>{
                            return <TouchableWithoutFeedback
                                onPress={()=>{
                                    this.yearCarousel.snapToItem(index, true);
                                }
                                }
                            >
                                <Text
                                    style={{color: Color.textColor}}
                                >{item}</Text>
                            </TouchableWithoutFeedback>
                        }}
                        sliderWidth={Dimensions.get('window').width * 0.65}
                        itemWidth={Dimensions.get('window').width * 0.18}
                        onSnapToItem={(index)=>{
                            console.log(index)
                        }}
                        inactiveSlideScale={1}
                        slideStyle={{
                            color: Color.textColor
                        }}
                        inactiveSlideOpacity={0.4}
                    />
                    <Carousel
                        ref={(c)=>{this.monthCarousel = c;}}
                        data={this.months}
                        renderItem={({item, index})=>{
                            return <TouchableWithoutFeedback
                                onPress={()=>{
                                    this.monthCarousel.snapToItem(index, true);
                                }
                                }
                            >
                                <Text
                                    style={{color: Color.textColor}}
                                >{item}</Text>
                            </TouchableWithoutFeedback>
                        }}
                        sliderWidth={Dimensions.get('window').width * 0.65}
                        itemWidth={Dimensions.get('window').width * 0.18}
                        onSnapToItem={(index)=>{
                            console.log(index)
                        }}
                        inactiveSlideScale={1}
                        slideStyle={{
                            color: Color.textColor
                        }}
                        inactiveSlideOpacity={0.4}
                    />
                </View>
            </View>
        );
    }
}
