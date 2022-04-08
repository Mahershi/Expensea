import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback, TouchableWithoutFeedback, TextInput, Dimensions} from 'react-native';
import {editExpenseStyle} from "../../styles/editexpensestyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";
import DatePicker from "react-native-date-picker";
import CustomSpacer from "../elements/CustomSpacer";
import Carousel from "react-native-snap-carousel";
import GlobalVars from "../../helpers/GlobalVars";
import CategoryModel from "../../models/CategoryModel";
import EditExpenseController from "../../controllers/edit_expense_controller";
import ExpenseModel from "../../models/ExpenseModel";


export default class AddEditExpenseScreen extends Component{
    cats = ['one', 'twosssssssssssss', 'three', 'four', 'five']
    constructor(props) {
        super(props);
        this.datePickerOpen = false;
        this.navigation = this.props.navigation;
        this.expense = this.props.route.params['expense'];
        this.currentDate = new Date(this.expense.expenseDate);
        console.log(this.props.route.params);
        this.controller = new EditExpenseController({navigation: this.navigation, goBackCallback: this.props.route.params['dashboardRefreshCallback']});
    }

    componentDidMount() {
        this.categoryCarousel.snapToItem(GlobalVars.categories.indexOf(CategoryModel.getObjectById({
            id: this.expense.categoryId
        })));
    }

    render() {
        return (
            <View style={editExpenseStyle.container}>
                <View style={editExpenseStyle.header}>
                    <View style={editExpenseStyle.subHead}>
                        <View style={editExpenseStyle.roundedButtonBG}>
                            <TouchableNativeFeedback
                                onPress={()=>{
                                    console.log("tapped")
                                    try{
                                        this.navigation.goBack();
                                    }catch(e){
                                        console.log("Going BAck Error: " + e);
                                    }
                                }}
                            >
                                <View style={{padding: 4}}>
                                    <Icon
                                        name='chevron-left'
                                        color={Color.textColor}
                                        size={28}
                                    />
                                </View>

                            </TouchableNativeFeedback>
                        </View>
                        <CustomSpacer width={10} />
                        <Text style={editExpenseStyle.title}>Expense</Text>
                    </View>
                    <View style={editExpenseStyle.roundedButtonBG}>
                        <TouchableNativeFeedback
                            onPress={()=>{
                                console.log("tapped")
                                this.controller.saveExpenseBind({expense: this.expense});
                            }}
                        >
                            <View style={{padding: 4}}>
                                <Icon
                                    name='check'
                                    color={Color.textColor}
                                    size={28}
                                />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={editExpenseStyle.middleContainer}>
                    <View style={editExpenseStyle.dateRow}>
                        <Text style={editExpenseStyle.dateHeading}>Date</Text>
                        <View>
                            <DatePicker
                                modal
                                open={this.datePickerOpen}
                                date={this.currentDate}
                                onConfirm={(date)=>{
                                    this.datePickerOpen = false;
                                    this.currentDate = date;
                                    this.expense.expenseDate = this.currentDate.toISOString()
                                    console.log(this.currentDate)
                                    this.setState({})
                                }}
                                onCancel={()=>{
                                    this.datePickerOpen = false;
                                    this.setState({});
                                }}
                                textColor={Color.textColor}
                                title='Expense Date'
                            />

                            <TouchableNativeFeedback
                                onPress={()=>{
                                    this.datePickerOpen = true;
                                    this.setState({});
                                }}
                            >
                                <View style={editExpenseStyle.datePickerRow}>
                                    <Text style={editExpenseStyle.date}>{this.currentDate.toString().substring(0, 10)}</Text>
                                    <CustomSpacer width={20}/>
                                    <Icon
                                        name='calendar-blank-outline'
                                        size={24}
                                        color={Color.textColor}
                                    />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={editExpenseStyle.amountRow}>
                        <TextInput
                            onChangeText={(value) => {
                                let regexp = /^\d+\.?\d{0,2}$/;
                                if(regexp.test(value)){
                                    this.expense.amount = value;
                                    this.setState({});
                                    console.log(this.expense.amount);
                                }
                            }}
                            style={editExpenseStyle.amountInput}
                            placeholder='Amount'
                            keyboardType='decimal-pad'
                            value={this.expense.amount.toString()}
                            textAlign='center'
                            placeholderTextColor={Color.textColor30}


                        />
                    </View>
                </View>
                <View style={editExpenseStyle.bottomContainer}>
                    <TextInput
                        onChangeText={(value)=>{
                            this.expense.name = value;
                            this.setState({});
                            console.log(this.expense.name);
                        }}
                        style={editExpenseStyle.nameInput}
                        onSubmitEditing={(value)=>{}}
                        value={this.expense.name.toString()}
                        placeholder='Expense Name'
                        textAlign='center'
                        placeholderTextColor={Color.primaryColor30}

                    />
                        <CustomSpacer height={30} />
                        <Text style={editExpenseStyle.categoryHeading}>Category</Text>
                        <View style={editExpenseStyle.carouselLineTop} />
                        <Carousel
                            ref={(c)=>{
                                this.categoryCarousel = c;
                            }}
                            // data={GlobalVars.categories}
                            data={GlobalVars.categories}

                            renderItem={({item, index})=>{
                                return <TouchableNativeFeedback
                                    onPress={()=>{
                                        console.log("Tapped : "+ index);
                                        this.categoryCarousel.snapToItem(index, true);
                                    }
                                    }
                                >
                                    <Text style={editExpenseStyle.carouselItemTextStyle}>{item.name}</Text>
                                </TouchableNativeFeedback>
                            }}
                            sliderWidth={Dimensions.get('window').width * 0.9}
                            itemWidth={150}
                            activeSlideOffset={0}
                            inactiveSlideScale={1}
                            onSnapToItem={(index)=>{
                                console.log("To: " + index)
                                this.expense.categoryId = GlobalVars.categories[index].id
                                console.log("New C: " + this.expense.categoryId);
                            }}



                        />
                        <View style={editExpenseStyle.carouselLineBottom} />

                </View>
            </View>
        );
    }


}
