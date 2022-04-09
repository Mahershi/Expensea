import React, {Component} from "react";
import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import {monthYearControlStyles} from "../../styles/styles";
import Carousel from "react-native-snap-carousel";
import Color from "../../constants/colors";
import GlobalVars from "../../helpers/GlobalVars";



export default class MonthYearControlElement extends Component{
    // years = [
    //     '2019',
    //     '2020',
    //     '2021',
    //     '2022'
    // ]
    // months = [
    //     'Jan',
    //     'Feb',
    //     'Mar',
    //     'Apr',
    //     "Jun",
    // ]

    constructor(props) {
        super(props);
        const {months, years, curMonth, curYear, callback} = this.props;
        this.months = months;
        this.years = years;
        this.curMonth = curMonth;
        this.curYear = curYear;
        this.callback = callback;
        console.log("CB:")
        console.log(callback)
    }

    componentDidMount() {
        this.monthCarousel.snapToItem(this.curMonth-1);
        this.yearCarousel.snapToItem(this.years.indexOf(this.curYear));
        console.log("snapped");
    }



    render() {
        console.log("CUR YEAR: " + this.curYear)
        console.log(this.years);
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
                    >{'$ ' + this.props.total}</Text>
                </View>
                <View
                    style={monthYearControlStyles.carouselContainer}
                >
                    <Carousel
                        firstItem={this.years.indexOf(this.curYear)}
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
                            this.curYear = this.years[index];
                            console.log("new");
                            console.log(this.curYear);
                            this.callback({month: this.curMonth, year: this.curYear});
                        }}
                        inactiveSlideScale={1}
                        // slideStyle={{
                        //     color: Color.textColor
                        // }}
                        inactiveSlideOpacity={0.4}
                    />
                    <Carousel
                        firstItem={this.curMonth-1}
                        ref={(c)=>{this.monthCarousel = c;}}
                        data={GlobalVars.monthsShort.slice(1, )}
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
                            // console.log(index)
                            this.curMonth = index+1
                            console.log("new");
                            console.log(this.curMonth);
                            this.callback({month: this.curMonth, year: this.curYear});
                        }}
                        inactiveSlideScale={1}
                        // slideStyle={{
                        //     color: Color.textColor
                        // }}
                        inactiveSlideOpacity={0.4}
                    />
                </View>
            </View>
        );
    }
}
