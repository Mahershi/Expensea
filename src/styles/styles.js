import React from 'react';
import {StyleSheet, Dimensions} from "react-native";
import Color from "../constants/colors";

export const buttonStyle = StyleSheet.create({
    primaryBg: {
        backgroundColor: Color.primaryColor,
        borderRadius: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    primaryText: {
        color: Color.textColor,
        fontSize: 12
    }
})

export const expenseStyles2 = StyleSheet.create({
    editIconStyle: {
        color: Color.textColor,
        alignSelf: 'center'
    },



    editIconBgStyle: {
        backgroundColor: Color.primaryColorShade,
        height: 36,
        width: 36,
        borderRadius: 18,
        // alignItems: 'center',
        justifyContent: 'center'
    },

    dashboardListStyle: {
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },

    headContainerStyle: {
        padding: 12,
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: Color.textColor,
        alignSelf: 'flex-start'
    },

    headDayStyle: {
        color: Color.primaryColor,
        fontSize: 20
    },

    expenseNameStyle: {
        color: Color.textColor,
        fontSize: 16
    },

    expenseCategoryStyle: {
        color: Color.primaryColorShade,
        fontSize: 12
    },

    expenseTileStyle: {
        // margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: Color.primaryColor,
        flex: 1
    },
})


export const expenseStyles = StyleSheet.create({
    editIconStyle: {
        color: Color.textColor,
        alignSelf: 'center'
    },



    editIconBgStyle: {
        backgroundColor: Color.primaryColor,
        height: 36,
        width: 36,
        borderRadius: 18,
        // alignItems: 'center',
        justifyContent: 'center'
    },

    dashboardListStyle: {
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },

    headContainerStyle: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: Color.primaryColor,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    headDateStyle: {
        color: Color.textColor,
        fontSize: 18
    },

    headTotalStyle: {
        color: Color.textColor,
        fontSize: 18
    },


    headDayStyle: {
        color: Color.textColor50,
        fontSize: 14
    },

    expenseNameStyle: {
      color: Color.primaryColor,
      fontSize: 16
    },

    expenseCategoryStyle: {
        color: Color.primaryColorShade,
        fontSize: 12
    },

    expenseTileStyle: {
        // margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: Color.primaryColor,
        flex: 1
    },


})

export const textStyles = StyleSheet.create({
    expenseHead: {
        fontSize: 28,
        letterSpacing: 1.05,
        alignSelf: 'center'
    },

    monthHead: {
        fontSize: 16,
        letterSpacing: 1.05,
        alignSelf: "center"
    },


})

export const monthYearControlStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 40
    },

    totalContainerStyle: {
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.3
    },

    totalTitleTextStyle: {
        fontSize: 22,
        color: Color.textColor60
    },

    totalTextStyle: {
        fontSize: 32,
        color: Color.textColor
    },

    carouselContainer: {
        flexDirection: "column"
    }
})



export const monthExpensePage = StyleSheet.create({
    fab: {
        // width: 70,
        // height: 70,
        borderRadius: 40,
        backgroundColor: Color.textColor,
        marginTop: -100,
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'

    },

    fabInner: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: Color.textColor,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    topContainer: {
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Color.primaryColor,
        height: Dimensions.get('window').height * 0.84,
        flexDirection: 'column'
    },

    bottomContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Color.textColor,
        height: Dimensions.get('window').height * 0.16,

    },

    titleStyle: {
        color: Color.primaryColor,
        fontSize: 24
    }
})

export const dashboardPage = StyleSheet.create({
    topContainer: {
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Color.textColor,
        height: Dimensions.get('window').height * 0.84 - 20,
    },

    bottomContainer: {
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Color.primaryColor,
        height: Dimensions.get('window').height * 0.16,

    }
})

export const loginPage = StyleSheet.create({
    pageStyle: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: Color.primaryColor
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleStyle: {
        fontSize: 32,
        color: Color.textColor
    },

    loginButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderColor: Color.textColor40,
        borderRadius: 12,
        borderWidth: 1
    },

    googleImageStyle: {
        width: 40,
        height: 40,
        margin: 8
    },

    googleSignInTextStyle: {
        fontSize: 16,
        margin: 8
    }
});

