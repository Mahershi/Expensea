import React from 'react';
import {StyleSheet, Dimensions} from "react-native";
import Color from "../constants/colors";

export const editCluster = StyleSheet.create({
    root: {
        padding: 20,
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: Color.textColor
    },

    head: {
        fontSize: 28,
        color: Color.primaryColor
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subTopRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputView: {

    },

    input: {
        borderRadius: 12,
        borderColor: Color.primaryColor30,
        borderWidth: 1,
        color: Color.primaryColor,
        fontSize: 24,
        alignItems: 'center',
        padding: 12
    }
})

export const clusterDetail = StyleSheet.create({
    root: {
        flex: 1,
    },

    topContainer: {
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Color.textColor,
        height: Dimensions.get('window').height * 0.84,
        flexDirection: 'column',
    },

    bottomContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Color.primaryColor,
        height: Dimensions.get('window').height * 0.16,
    },

    totalHead: {
        fontSize: 16,
        color: Color.textColor70,
        letterSpacing: 1.01
    },

    total: {
        fontSize: 28,
        color: Color.textColor,
        letterSpacing: 1.01
    }
})

export const myClusters = StyleSheet.create({
    root: {
        flex: 1,
    },

    topContainer: {
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Color.primaryColor,
        height: Dimensions.get('window').height * 0.84,
        flexDirection: 'column',
    },

    bottomContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Color.textColor,
        height: Dimensions.get('window').height * 0.16,
    },

    head: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    title: {
        color: Color.primaryColor,
        fontSize: 26,
        letterSpacing: 1.01
    },

    subHead: {
        color: Color.primaryColorShade,
        fontSize: 14,
        letterSpacing: 1.01
    },

    tileBg: {
        backgroundColor: Color.primaryColorShade,
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        marginVertical: 10,
    },

    stick: {
        width: 2,
        backgroundColor: Color.textColor,
        borderRadius: 2,
    },

    subColumn: {
        justifyContent: 'space-between',
        flexDirection: 'column',
    },

    clusterTitle: {
        fontSize: 20,
        color: Color.textColor,
        letterSpacing: 1.01
    },

    countStyle: {
        fontSize: 16,
        color: Color.textColor70,
        letterSpacing: 1.01
    }
})
