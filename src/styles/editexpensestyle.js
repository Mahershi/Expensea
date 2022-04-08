import React from 'react';
import {StyleSheet, Dimensions} from "react-native";
import Color from "../constants/colors";

export const editExpenseStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Color.textColor
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.primaryColor,
        paddingVertical: 20,
        paddingHorizontal: 12
    },

    subHead: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    roundedButtonBG: {
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: Color.textColor,
        fontSize: 28,
        letterSpacing: 1.01
    },

    middleContainer: {
        backgroundColor: Color.primaryColor,
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    datePickerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    dateHeading: {
        fontSize: 16,
        color: Color.textColor50
    },

    categoryHeading:{
        fontSize: 16,
        color: Color.primaryColor80 ,
        alignSelf: 'center'
    },

    date: {
        fontSize: 16,
        color: Color.textColor70
    },

    amountRow: {
        paddingTop: 40,
        paddingBottom: 20,
    },

    amountInput: {
        borderRadius: 12,
        borderColor: Color.textColor20,
        borderWidth: 1,
        color: Color.textColor,
        fontSize: 24,
        alignItems: 'center',
        padding: 12
    },

    bottomContainer: {
        padding: 20,
        paddingTop: 40,
        flexDirection: 'column',
        backgroundColor: Color.textColor,
    },

    nameInput: {
        borderRadius: 12,
        borderColor: Color.primaryColor30,
        borderWidth: 1,
        color: Color.primaryColor,
        fontSize: 24,
        alignItems: 'center',
        padding: 12
    },

    carouselLineTop: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: Color.primaryColor,
        width: 100,
        margin: 20,
    },


    carouselLineBottom: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: Color.primaryColor,
        width: 100,
        margin: 20,
    },

    carouselItemTextStyle: {
        color: Color.primaryColor,
        fontSize: 16,
        alignSelf: 'center'
    }
})
