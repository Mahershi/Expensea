import React from 'react';
import {StyleSheet, Dimensions} from "react-native";
import Color from "../constants/colors";

export const logoutButton = StyleSheet.create({
   bg: {
      borderRadius: 12,
      backgroundColor: Color.primaryColor,
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignSelf: 'center'
   },

   text: {
      fontSize: 20,
      color: Color.textColor
   }
})

export const menuButton = StyleSheet.create({
   iconBg: {
      borderRadius: 100,
      backgroundColor: Color.primaryColor,
      padding: 8,
   },

   title: {
      fontSize: 20,
      letterSpacing: 1.01,
      color: Color.primaryColor
   },

   root: {
      padding: 12,
      borderColor: Color.primaryColorShade,
      borderWidth: 1,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   rowLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
   }
})

export const menuStyles = StyleSheet.create({
   rootContainer: {

   },

   topContainer: {
      padding: 20,
      marginTop: -20,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: Color.textColor,
      height: Dimensions.get('window').height * 0.7,
      flexDirection: 'column',
      justifyContent: 'space-between'
   },

   bottomContainer: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      backgroundColor: Color.primaryColor,
      height: Dimensions.get('window').height * 0.3,
   },

   profile: {
      // borderWidth: 1,
      // borderColor: 'red',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

   iconBorder: {
      borderWidth: 2,
      borderRadius: 100,
      padding: 12,
      borderColor: Color.textColor
   },

   nameStyle: {
      fontSize: 20,
      letterSpacing: 1.01,
      color: Color.textColor70
   }
});
