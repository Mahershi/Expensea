import React from 'react';
import {StyleSheet, Dimensions} from "react-native";
import Color from "../constants/colors";

export const prevMonths = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
    },

    tileBg: {
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        borderRadius: 12,
        backgroundColor: Color.primaryColor,
        flexDirection: 'column'
    },

    head: {
        fontSize: 16,
        color: Color.textColor50
    },

    value: {
        fontSize: 18,
        color: Color.textColor
    },

    subRow: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})
