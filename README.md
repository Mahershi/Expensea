# ExpenSEA
<table>
<tr>
    <td width="33%">
      <img src="https://i.ibb.co/2WGHRrH/login.jpg" />
    </td>
    <td width="33%">
      <img src="https://i.ibb.co/vD8Df15/dashboard.jpg" />
    </td>
    <td width="33%">
      <img src="https://i.ibb.co/M1gzdv7/month.jpg" />
    </td>
  </tr>
</table>
Version History

    1.0.0 - First Build

Table of Contents:
1. About
2. Motivation
3. Features
4. How to use
5. Prerequisites
6. Installation
7. Project Structure
8. Tech Stack

### About
ExpenSEA is a cross platform mobile application which can be used to log your daily expenses and keep an eye on your budget.

### Motivation
Budgeting and managing ones expenses is a crucial part of your daily routine, especially when you are a student in a foreign country responsible for all your bills. Carrying a notebook around isn't always feasible so how about an easy to use application to help you track your expenses.

### Features
1. Google Sign In
2. Add/Delete/Modify Expenses
3. View recent expenses
4. View expenses of a month
5. Clusters - Clubbing expenses together under a common name
6. Add/Delete/Modify Clusters
7. View expenses in a Cluster

### How to use
As simple as using a calculator, just sign in using your google account and start tracking your expenses.

### Prerequisites
You will need [Node](https://nodejs.org/en/), React Native CLI, Yarn, Python 2, JDK and Android Studio installed.
> Android Studio is required to confirm installations of Android SDK, Android SDK Platform and Android Virtual Device

> React Native CLI will be used to create new projects and execute them. 

### Installation
Go to a directory where you would like to clone the repository

    git clone https://github.com/Mahershi/Expensea.git
    cd Expensea
    npm install
    npm run android || npm run ios

### Project Structure

    ├───src
    │   ├───actions/
    │   ├───assets/
    │   │   └───img
    │   ├───components/
    │   │   ├───elements/
    │   │   └───screens/
    │   ├───constants/
    │   ├───controllers/
    │   ├───helpers/
    │   ├───models/
    │   ├───network/
    │   ├───reducers/
    │   ├───services/
    │   └───styles/
    └───App.js
    
    actions: has definitions for Redux Action for state manipulation
    components:
	    /elements: has reusable view components
	    /screens: View code for Screens
	constants:
		/actionConstants.js: Action constants to use with Redux Actions
		/colors.js: Colors constants for the application.
					Theme of the application can be changed by just
					changing color values in this file.
	controllers: definitions for coontrollers
	helpers:
		/GlobarVar.js: has variables that need to be accessed globally
						and any reusable method
		/googleSignin,js: Class encapsulating business login for google
							signin.
	models: model definitions
	network:
		/API.js: API endpoint string definitions
		/config: Network config and class encapsulation for http calls
				using axios.
	reducers: Reducer definitions for Redux State Management
	services: Various API calls for different aspects
	styles: Styling code for views.



### Preview
#### Screenshots

<table>
  <tr>
    <td width="33%">
      <img src="https://i.ibb.co/p4jrpbW/add-Edit-Expense.jpg" />
    </td>
    <td width="33%">
      <img src="https://i.ibb.co/6BtChB3/myclusters.jpg" />
    </td>
    <td width="33%">
      <img src="https://i.ibb.co/09vKf6C/cluster-detail.jpg" />
    </td>
  </tr>
</table>

#### GIFs

### Bugs
1. Adding an expense in Cluster then navigating back to My Clusters Screen does not update the number of expenses displayed below the cluster name.

### Future Implementations
1. More than one sign in method.
2. UI for modifying cluster for an expense has been designed but implementations are pending.
3. Graphical Representation of data for better tracking of expenses.
4. Personalized theme settings

Design Example for Future implementations
<table>
  <tr>
    <td width="33%">
      <img src="https://i.ibb.co/dPKP2J2/Whats-App-Image-2022-04-11-at-2-18-49-AM-1.jpg" />
    </td>
    <td width="33%">
      <img src="https://i.ibb.co/0cg2FLk/Whats-App-Image-2022-04-11-at-2-18-49-AM.jpg" />
    </td>
    <td width="33%">
      <img src="https://i.ibb.co/brJS4Dw/Whats-App-Image-2022-04-11-at-2-18-53-AM-1.jpg" />
    </td>
  </tr>
  <tr>
    <td width="33%">
      <img src="https://i.ibb.co/j8YWB94/Whats-App-Image-2022-04-11-at-2-18-53-AM.jpg" />
  </tr>
</table>


### Design Pattern
MVC Pattern has been used to design the architecture of the application.
State Management in React Native can be done by various methods however, Redux has been implemented in this project.
> Redux Stores having separate reducers and actions for every Stateful screen (Component) have been created.
> These Reducers provide state values to the screen and these state values can be changed using actions.
> mapStateToProps have been implemented to map the state values to props.
> mapDispatchToProps have been implemented which provides the actions in the props as well.
> These actions are simple methods which can be accessed by the screen in question.
> To make the architecture modular, we introduce controllers for screens and pass these state values to controller objects thereby handing over all the state manipulating responsibilities to the controller.
> 
> Controller triggers the action methods which changes the state of screens hence, re-rending them. Controller can use these methods along with API calls to provide a smooth user interface. For example, when reloading a screen or fetching data from API, controller calls `this.actions.loadScreen()` method which changes the state variable `loading` to `true` and re-renders the screen. When the View code encounters `loading` as `true` it knows to display a loading indicator. When the API call is completed, controller triggers the `this.actions.loadDone(data`) method which changes the state variable `loading` to `false` all while providing `data` variable in the state as well. The View code knows to display the provided `data`.
> 
>Models have been used to store instances of data.

### Tech Stack
#### Frontend
React Native
#### Backend, API
Django
#### Database
Postgres

### Credits
<a href='https://www.npmjs.com/package/react-native-google-signin'>react-native-google-signin/google-signin</a>
> For implementing Firebase google sign in

<a href='https://www.npmjs.com/package/@react-navigation/native-stack'>react-navigation/native-stack</a>
> For implementing Stack Navigator

<a href='https://www.npmjs.com/package/react-native-date-picker'>react-native-date-picker</a>
> For implementing a visually satisfying date picker

<a href='https://www.npmjs.com/package/react-native-snap-carousel'>react-native-snap-carousel</a>
>Carousel has been used to slide through Month and Year in the MonthlyExpenses Screen to enable user to select a month and year to retrieve expenses for the same.

<a href='https://www.npmjs.com/package/react-native-swipe-list-view'>react-native-swipe-list-view</a>
>To provide slidable actions (delete, modify cluster) to list items (expense tiles)

<a href='https://www.npmjs.com/package/react-native-swipe-list-view'>react-native-vector-icons</a>
> For Material Icons

<a href='https://redux.js.org/introduction/getting-started'>redux</a>
>For State Management

<a href='https://www.npmjs.com/package/react-redux'>react-redux</a>
<a href='https://www.npmjs.com/package/react-native-axios'>axios</a>
> For HTTP calls.


### Contact
Mahershi Bhavsar
University of Regina, Regina, SK
msb753@uregina.ca

### Copyright

Copyright 2022 Province of Saskatchewan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.



