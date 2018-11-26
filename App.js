import Main from './components/Main';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'
// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
// Export it as the root component
export default navigator
// import React from 'react'
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import { SwitchNavigator } from 'react-navigation'
// // import the different screens
// import Loading from './src/Loading'
// import SignUp from './src/SignUp'
// import Login from './src/Login'
// import Main from './src/Main'
// // create our app's navigation stack
// const App = SwitchNavigator(
//   {
//     Loading,
//     SignUp,
//     Login,
//     Main
//   },
//   {
//     initialRouteName: 'Loading'
//   }
// )
// export default App