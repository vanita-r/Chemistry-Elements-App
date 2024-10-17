import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ImportantEleScreen from './screens/ImportantEleScreen';
import FoodAndHealthScreen from './screens/FoodAndHealthScreen';
import InformationScreen from './screens/InformationScreen';
import Aluminum from './elements/Aluminum';
import Barium from './elements/Barium';
import Bismuth from './elements/Bismuth';
import Bromine from './elements/Bromine';
import Calcium from './elements/Calcium';
import Carbon from './elements/Carbon';
import Chlorine from './elements/Chlorine';
import Fluorine from './elements/Fluorine';
import Gold from './elements/Gold';
import Hydrogen from './elements/Hydrogen';
import Iodine from './elements/Iodine';
import Magnesium from './elements/Magnesium';
import Nitrogen from './elements/Nitrogen';
import Oxygen from './elements/Oxygen';
import Phosphorus from './elements/Phosphorus';
import Potassium from './elements/Potassium';
import Silicon from './elements/Silicon';
import Sodium from './elements/Sodium';
import Sulfur from './elements/Sulfur';
import Tin from './elements/Tin';

export default class App extends React.Component {
  render(){
   return (
    <View>
        <AppContainer />
    </View>
    );
  }
}

//use this as a reference https://snack.expo.dev/@vanita_.r/d38cb9 and https://snack.expo.dev/@vanita_.r/project-58

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ImportantEleScreen: ImportantEleScreen,
  FoodAndHealthScreen: FoodAndHealthScreen,
  InformationScreen: InformationScreen,
  Aluminum: Aluminum,
  Barium: Barium,
  Bismuth: Bismuth,
  Bromine: Bromine,
  Calcium: Calcium,
  Carbon: Carbon,
  Chlorine: Chlorine, 
  Fluorine: Fluorine,
  Gold: Gold,
  Hydrogen: Hydrogen,
  Iodine: Iodine,
  Magnesium: Magnesium,
  Nitrogen: Nitrogen,
  Oxygen: Oxygen,
  Phosphorus: Phosphorus,
  Potassium: Potassium,
  Silicon: Silicon,
  Sodium: Sodium,
  Sulfur: Sulfur,
  Tin: Tin,
});

const AppContainer = createAppContainer(AppNavigator);

