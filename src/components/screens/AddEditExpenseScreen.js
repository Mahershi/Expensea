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
        this.newExp = this.expense.returnCopy();
        this.currentDate = new Date(this.expense.expenseDate);
        this.backToDashboard = this.props.route.params['backToDashboard'];
        this.backToMonthly = this.props.route.params['backToMonthly'];
        this.backToCluster = this.props.route.params['backToCluster'];
        this.clusterReloadBind = this.props.route.params['clusterReloadBind'];
        this.controller = new EditExpenseController({
            navigation: this.navigation,
            backToMonthly: this.backToMonthly,
            backToDashboard: this.backToDashboard,
            backToCluster: this.backToCluster,
            clusterReloadBind: this.clusterReloadBind
        });
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
                                this.controller.saveExpenseBind({expense: this.newExp});
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
                                    this.newExp.expenseDate = this.currentDate.toISOString()
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
                                    this.newExp.amount = value;
                                    this.setState({});
                                }
                            }}
                            style={editExpenseStyle.amountInput}
                            placeholder='Amount'
                            keyboardType='decimal-pad'
                            value={this.newExp.amount.toString()}
                            textAlign='center'
                            placeholderTextColor={Color.textColor30}


                        />
                    </View>
                </View>
                <View style={editExpenseStyle.bottomContainer}>
                    <TextInput
                        onChangeText={(value)=>{
                            this.newExp.name = value;
                            this.setState({});
                        }}
                        style={editExpenseStyle.nameInput}
                        onSubmitEditing={(value)=>{}}
                        value={this.newExp.name.toString()}
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
                                this.newExp.categoryId = GlobalVars.categories[index].id
                            }}



                        />
                        <View style={editExpenseStyle.carouselLineBottom} />

                </View>
            </View>
        );
    }


}
